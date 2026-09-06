# Performance improvements applied

I implemented a set of targeted performance improvements to make the app faster and reduce unnecessary re-renders. These changes are safe and incremental; they focus on UI rendering and React best practices so you can measure improvements immediately.

Files changed:
- src/components/MissionCard.tsx
  - Converted MissionCard to a memoized component (React.memo) and moved styles into a StyleSheet to avoid recreating style objects.
  - Used numberOfLines & ellipsizeMode for stable layout when text is long.

- src/theme/index.tsx
  - Memoized the theme object using useMemo() so the ThemeProvider supplies a stable reference and does not cause consumer re-renders on each parent render.

- src/screens/HomeScreen.tsx
  - Replaced ScrollView + map with FlatList for mission rendering. FlatList is optimized for lists and reduces rendering cost for larger mission arrays.
  - Used useCallback for renderItem and keyExtractor to keep stable function references.
  - Moved header and footer to ListHeaderComponent / ListFooterComponent to avoid re-creating them on every render.

Why this helps
- Memoizing MissionCard prevents redundant re-renders when parent state updates but mission props are unchanged.
- FlatList provides virtualization and only renders items that are visible (important as missions grow or additional lists are added).
- Stable ThemeContext value avoids wide re-render cascades when provider parent re-renders.
- Moving styles to StyleSheet uses native style objects which are faster and avoid allocation overhead.

Next recommendations (non-breaking, optional) — pick any to implement next:
1. Enable Hermes (Android) via Expo prebuild config to improve JS performance and startup time.
2. Use react-native-screens and optimize navigation transitions (already recommended by React Navigation docs).
3. Avoid passing inline functions/objects to deeply nested components; prefer useCallback/useMemo or move handlers to stores.
4. Lazy-load non-critical screens with React.lazy / dynamic imports.
5. Use Image caching for remote assets (react-native-fast-image) and optimize asset sizes.
6. Add a performance monitor screen to measure FPS and render times during development.

If you want I can implement additional optimizations like Hermes enablement and lazy-loading next. Which would you like me to do next? (hermes | lazy-load | img-cache | perf-monitor | none)