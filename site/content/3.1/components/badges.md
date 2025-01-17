---
layout: docs
title: Badges
group: components
toc: true
keywords: badges
---

Badges scale to match the size of the immediate parent element by using relative font sizing and ```em``` units.

{{< example codeId="code1" class="badge-example-headings">}}

<h1>Example heading <span class="badge bg-secondary">New</span></h1>
##split##
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
##split##
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
##split##
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
##split##
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
##split##
<h6>Example heading <span class="badge bg-secondary">New</span></h6>

{{< /example >}}

## On buttons

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-warning">4</span>
</button>

{{< /example >}}

## Position

Use utilities to modify a ```.badge``` and position it in the corner of a link or button.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-success position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        
{{< /example >}}

You can also replace the ```.badge``` class with a few more utilities without a count 
for a more generic indicator.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-warning position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
        
{{< /example >}}

## Color options

{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<span class="badge text-bg-primary">Primary</span>
##split##
<span class="badge text-bg-secondary">Secondary</span>
##split##
<span class="badge text-bg-success">Success</span>
##split##
<span class="badge text-bg-info">Info</span>
##split##
<span class="badge text-bg-warning">Warning</span>
##split##
<span class="badge text-bg-danger">Danger</span>
##split##
<span class="badge text-bg-light">Light</span>
##split##
<span class="badge text-bg-dark">Dark</span>

{{< /example >}}

## Pill badges

Use the ```.rounded-pill``` utility class to make badges more rounded 
with a larger ```border-radius```.

{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<span class="badge rounded-pill text-bg-primary">Primary</span>
##split##
<span class="badge rounded-pill text-bg-secondary">Secondary</span>
##split##
<span class="badge rounded-pill text-bg-success">Success</span>
##split##
<span class="badge rounded-pill text-bg-info">Info</span>
##split##
<span class="badge rounded-pill text-bg-warning">Warning</span>
##split##
<span class="badge rounded-pill text-bg-danger">Danger</span>
##split##
<span class="badge rounded-pill text-bg-light">Light</span>
##split##
<span class="badge rounded-pill text-bg-dark">Dark</span>

{{< /example >}}
