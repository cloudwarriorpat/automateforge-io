import { describe, it, expect } from 'vitest';
import {
  products,
  retainers,
  getProductBySlug,
  getProductsByCategory,
  getProductsByTier,
  getFeaturedProducts,
  categoryMeta,
} from '@/data/products';

describe('Products data', () => {
  it('has at least one product', () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it('every product has required fields', () => {
    for (const p of products) {
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.tagline).toBeTruthy();
      expect(p.category).toBeTruthy();
      expect(p.priceEur).toBeTruthy();
      expect(p.pricePln).toBeTruthy();
      expect(p.timeline).toBeTruthy();
      expect(p.deliverables.length).toBeGreaterThan(0);
      expect(p.outOfScope.length).toBeGreaterThan(0);
    }
  });

  it('slugs are unique', () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every product category has metadata', () => {
    const cats = new Set(products.map((p) => p.category));
    for (const cat of cats) {
      expect(categoryMeta[cat]).toBeDefined();
      expect(categoryMeta[cat].label).toBeTruthy();
    }
  });

  it('getProductBySlug returns correct product', () => {
    const first = products[0];
    expect(getProductBySlug(first.slug)).toBe(first);
  });

  it('getProductBySlug returns undefined for invalid slug', () => {
    expect(getProductBySlug('nonexistent-slug')).toBeUndefined();
  });

  it('getProductsByCategory filters correctly', () => {
    const reliabilityProducts = getProductsByCategory('reliability');
    expect(reliabilityProducts.length).toBeGreaterThan(0);
    for (const p of reliabilityProducts) {
      expect(p.category).toBe('reliability');
    }
  });

  it('getProductsByTier filters correctly', () => {
    const entryProducts = getProductsByTier('entry');
    expect(entryProducts.length).toBeGreaterThan(0);
    for (const p of entryProducts) {
      expect(p.tier).toBe('entry');
    }
  });

  it('getFeaturedProducts returns valid products', () => {
    const featured = getFeaturedProducts();
    expect(featured.length).toBeGreaterThan(0);
    for (const p of featured) {
      expect(p.slug).toBeTruthy();
    }
  });

  it('retainers have required fields', () => {
    expect(retainers.length).toBeGreaterThan(0);
    for (const r of retainers) {
      expect(r.slug).toBeTruthy();
      expect(r.name).toBeTruthy();
      expect(r.priceEur).toBeTruthy();
      expect(r.includes.length).toBeGreaterThan(0);
    }
  });
});
