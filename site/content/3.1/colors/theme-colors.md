---
layout: docs
title: Theme colors
group: colors
aliases:
  - "/3.1/colors/"
  - "/colors/"
toc: true
keywords: colors, theme colors
---

<p class="fs-4 ms-0 mb-4 page-description">
Material Style comes designed with a baseline theme that is adaptive to color modes and can be used as-is, straight out of the box or customized as per your need. 
</p>

Theme colors are adaptive to color modes, meaning they change according to the color mode (for example, dark and light mode). Try switching to dark/light mode from the top navigation bar.

<div class="color-list mb-4">
  <div class="theme-color-palette d-flex flex-wrap gap-2">
    <div class="text-bg-primary">Primary</div>
    <div class="text-bg-secondary">Secondary</div>
    <div class="text-bg-tertiary">Tertiary</div>
    <div class="text-bg-success">Success</div>
    <div class="text-bg-info">Info</div>
    <div class="text-bg-warning">Warning</div>
    <div class="text-bg-danger">Danger</div>
    <div class="text-bg-light">Light</div>
    <div class="text-bg-dark">Dark</div>
  </div>
</div>

Each theme color has additional color variants:
- Hover and active colors for the theme color.
- A subtle variant of the theme color.
- Hover and active colors for the subtle variant.
- Emphasis variant of the theme color for high contrast.
- Hover color for the emphasis variant.
- Text on theme: Color of text on the theme-colored background.
- Subtle border color.

We use these color variants across our components, which allows us to change the theme colors using CSS variables.

<br>

## Primary
The primary color is used to derive roles for key components across the UI, such as the hyperlinks, prominent buttons, focus and active states.
{{< theme-color-palette theme="primary" >}}

## Secondary
The secondary color is used for less prominent components in the UI.
{{< theme-color-palette theme="secondary" >}}

## Tertiary
The tertiary color is used to derive the roles of contrasting accents that can be used to balance primary and secondary colors or bring heightened attention to an element. 
{{< theme-color-palette theme="tertiary" >}}

## Success
The success color is used for positive or successful actions and information.
{{< theme-color-palette theme="success" >}}

## Info
The info color is used for neutral and informative content.
{{< theme-color-palette theme="info" >}}

## Warning
The warning color is used for non-destructive warning messages.
{{< theme-color-palette theme="warning" >}}

## Danger
The danger color is used for errors and dangerous actions.
{{< theme-color-palette theme="danger" >}}

## Light
{{< theme-color-palette theme="light" >}}

## Dark
{{< theme-color-palette theme="dark" >}}

<hr class="mb-5">

## More colors

### Body
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div class="border" style="background-color: var(--bs-body-bg);">&nbsp</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Background color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-body-bg`<br>`--bs-body-bg-rgb`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-body-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Text color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-body-color`<br>`--bs-body-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

### Surface
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-surface-bg);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-surface-color);">Background color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-surface-bg`<br>`--bs-surface-bg-rgb`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-surface-bg-hover);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-surface-color);">Background hover color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-surface-bg-hover`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-surface-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-surface-color);">Text color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-surface-color`<br>`--bs-surface-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

### Emphasis
For higher contrast text. Not applicable for backgrounds.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Emphasis</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-emphasis-color`<br>`--bs-emphasis-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

### Muted
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-muted-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Muted</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-muted-color`{{< /markdown >}}</span>
    </div>
  </div>
</div>

### Border
For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-border-color)">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Border</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-border-color`{{< /markdown >}}</span>
    </div>
  </div>
</div>
