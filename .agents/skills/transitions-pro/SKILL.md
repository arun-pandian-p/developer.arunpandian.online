---
name: transitions-pro
description: Agent skill for transitions.dev and transitions-pro. High-performance, accessible CSS and Motion transition recipes for web UIs including card resizes, modals, tab sliding, shimmer text, hover physics, accordion morphs, and micro-interactions.
version: 1.0.0
---

# transitions-pro: UI Transition Recipes (transitions.dev)

`transitions-pro` provides hardware-accelerated, responsive, accessibility-guarded CSS and Framer Motion transition recipes for modern web applications.

---

## 1. Quick CLI Integration

To add specific transition recipes directly into your project:

```bash
# Add a single transition recipe into ./transitions/<name>.md
npx transitions-pro add card-resize

# Add all free transition recipes at once
npx transitions-pro add --all

# List all available transition recipes
npx transitions-pro list
```

---

## 2. Core Transition Library

### Free Recipes (Instant Install)

1. **`card-resize`**: Tweening container width/height during layout changes using `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **`number-pop-in`**: Counter or metric pop-in state animation.
3. **`notification-badge`**: Pulsing or scale-in notification dot.
4. **`text-states-swap`**: Smooth cross-fade transition between text labels (e.g. "Save" → "Saved").
5. **`menu-dropdown`**: Glassmorphic dropdown reveal with scale and opacity.
6. **`modal`**: Centered modal dialog scale-in with backdrop blur.
7. **`panel-reveal`**: Slide-over or drawer panel reveal.
8. **`page-side-by-side`**: Smooth horizontal view transition.
9. **`icon-swap`**: Swapping icons (e.g., Arrow diagonal to horizontal) on hover.
10. **`success-check`**: Checkmark animation path draw.
11. **`avatar-group-hover`**: Expanding overlapping avatar stack on hover.
12. **`error-state-shake`**: Subtle horizontal shake for form error validation.
13. **`input-clear-dissolve`**: Dissolving search/input clear button.
14. **`skeleton-reveal`**: Skeletal loader to content transition.
15. **`shimmer-text`**: Shimmering metallic gradient text highlight.
16. **`tabs-sliding`**: Animated sliding tab underline or indicator pill.
17. **`tooltip`**: Lightweight popover tooltip reveal.
18. **`texts-reveal`**: Scroll-driven text line reveal.
19. **`card-tilt`**: 3D magnetic perspective card tilt on hover.
20. **`plus-menu-morph`**: Morphing plus icon into close 'X' or menu grid.
21. **`accordion`**: `grid-template-rows` height animation for accordions without layout thrash.
22. **`toast`**: Notification toast slide and stack.
23. **`like-button`**: Interactive heart pulse/burst on click.
24. **`learn-more-hover`**: Arrow slide and line extend on CTA hover.
25. **`checkbox-check`**: Accessible SVG checkmark draw.
26. **`spinning-counter`**: Slot-machine style digit spinner.
27. **`toggle`**: Smooth switch toggle thumb slide.

---

## 3. Hardware Acceleration & Accessibility Rules

- **Transform & Opacity Only**: Animate `transform` and `opacity` to avoid layout repaint thrash. For height transitions, use `grid-template-rows: 1fr` / `0fr`.
- **Reduced Motion Guard**: Always include `@media (prefers-reduced-motion: reduce)` to disable or simplify motion for user OS preferences.
- **Duration Tuning**: Standard ease curve: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-glide`) with 200ms–350ms duration.
