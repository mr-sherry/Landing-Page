import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { getAllEBikes } from '../../Data/EBike';
import styles from './Lists.module.css'

const PAGE_SIZE = 10;

const Lists = ({ itemHeight = 60, listHeight = 500, width = '100%' }) => {
    const allEBikes = useMemo(() => getAllEBikes(), []);
    const [filteredData, setFilteredData] = useState([]);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const [brand, setBrand] = useState('');
    const [minPrice, setMinPrice] = useState(500);
    const [maxPrice, setMaxPrice] = useState(5000);

    const allBrands = useMemo(() => {
        const brands = new Set(allEBikes.map((b) => b.brand));
        return ['All', ...Array.from(brands)];
    }, [allEBikes]);

    const priceRange = useMemo(() => {
        const prices = allEBikes.map((b) => parseInt(b.price.replace(/[^0-9]/g, '')));
        return {
            min: Math.min(...prices),
            max: Math.max(...prices),
        };
    }, [allEBikes]);

    const applyFilters = useCallback(() => {
        const result = allEBikes.filter((b) => {
            const price = parseInt(b.price.replace(/[^0-9]/g, ''));
            const brandMatch = brand === '' || brand === 'All' || b.brand === brand;
            const priceMatch = price >= minPrice && price <= maxPrice;
            return brandMatch && priceMatch;
        });
        setFilteredData(result);
        setItems([]);
        setPage(1);
        setHasMore(true);
    }, [allEBikes, brand, minPrice, maxPrice]);

    const resetFilters = () => {
        setBrand('');
        setMinPrice(priceRange.min);
        setMaxPrice(priceRange.max);
    };

    const fetchData = async (pageNum, source) => {
        await new Promise((r) => setTimeout(r, 300));
        const start = (pageNum - 1) * PAGE_SIZE;
        return source.slice(start, start + PAGE_SIZE);
    };

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        const newItems = await fetchData(page, filteredData);
        if (newItems.length === 0) {
            setHasMore(false);
        } else {
            setItems((prev) => [...prev, ...newItems]);
            setPage((prev) => prev + 1);
        }
        setLoading(false);
    }, [loading, hasMore, page, filteredData]);

    const handleRender = ({ visibleStopIndex }) => {
        if (hasMore && !loading && visibleStopIndex >= items.length - 1) {
            loadMore();
        }
    };

    const Row = ({ index, style }) => {
        const item = items[index] || {};
        return (
            <div
                style={{
                    ...style,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 100px',
                    gap: '1rem',
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    color: '#ffffff',
                    backgroundColor: index % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                }}
            >
                {item.name ? (
                    <>
                        <span>{item.name}</span>
                        <span>{item.brand}</span>
                        <span style={{ fontWeight: 600 }}>{item.price}</span>
                    </>
                ) : (
                    <span style={{ opacity: 0.5 }}>Loading…</span>
                )}
            </div>
        );
    };

    // 🛠 Initial load and refresh fix
    useEffect(() => {
        if (allEBikes.length) {
            setMinPrice(priceRange.min);
            setMaxPrice(priceRange.max);
            applyFilters();
        }
    }, [allEBikes, priceRange.min, priceRange.max]);

    useEffect(() => {
        if (filteredData.length > 0) {
            loadMore();
        }
    }, [filteredData]);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>🚴 Top E‑Bike Models</h2>
            <div className={styles.wrapper}>
                {/* Filters */}
                <div className={styles.filters}>
                    <h3 className={styles.filterTitle}>🔍 Filters</h3>

                    <label>Brand</label>
                    <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className={styles.select}
                        style={{
                            border: brand && brand !== 'All' ? '2px solid #3a0ca3' : '1px solid #444',
                        }}
                    >
                        {allBrands.map((b) => (
                            <option key={b} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>

                    <label>Min Price: ${minPrice}</label>
                    <input
                        type="range"
                        className={styles.rangeInput}
                        min={priceRange.min}
                        max={priceRange.max}
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />

                    <label>Max Price: ${maxPrice}</label>
                    <input
                        type="range"
                        className={styles.rangeInput}
                        min={priceRange.min}
                        max={priceRange.max}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />

                    <button onClick={applyFilters} className={styles.applyBtn}>Apply Filters</button>
                    <button onClick={resetFilters} className={styles.resetBtn}>Reset Filters</button>
                    <p className={styles.resultCount}>
                        Showing {items.length} of {filteredData.length} results
                    </p>
                </div>

                {/* Results */}
                <div style={{ flex: '1 1 0%' }}>


                    <div className={styles.tableHeader} >
                        <span>Model</span>
                        <span>Brand</span>
                        <span>Price</span>
                    </div>

                    <List
                        className={styles.table}
                        height={listHeight}
                        itemCount={hasMore ? items.length + 1 : items.length}
                        itemSize={itemHeight}
                        width={width}
                        onItemsRendered={({ visibleStopIndex }) => handleRender({ visibleStopIndex })}
                    >
                        {Row}
                    </List>

                    {loading && <div className={styles.loading}>Loading more…</div>}
                </div>
            </div>
        </div>

    );
};

export default Lists;
