# React Notes

19/09/2026
## Quick Recap

1. **Two CDN scripts** — `react.development.js` (core React: `createElement`, virtual DOM logic) and `react-dom.development.js` (renders that virtual DOM into the actual browser DOM).
2. **`crossorigin`** — fetches the CDN script under CORS so you get real error messages instead of a vague "Script error."
3. **`React.createElement(type, props, ...children)`** — builds a React element (a plain JS object describing UI), not real DOM yet.
4. **`ReactDOM.createRoot(domNode)`** — creates a root tied to a specific DOM node (your mount point).
5. **`root.render(element)`** — mounts the element tree into that DOM node, replacing whatever was there. React only controls that node's subtree — nothing else on the page.
6. **Nesting** — pass a `React.createElement(...)` call as a child to build a tree (parent → child → grandchild).
7. **Multiple siblings** — pass an **array** of elements as a single child argument to render several elements side by side under the same parent.

## Render

**Render** = the act of converting a description of UI (a React element — just a plain JS object) into actual, visible content in the browser's DOM.

Before `render()` is called, `heading` is just data sitting in memory — React doesn't know or care yet whether it appears on screen. Calling `root.render(heading)` is what tells React: "now go build the real DOM nodes for this and place them on the page."

More broadly, "rendering" is this whole translate-description-into-visible-UI process — and it's not just a one-time thing: whenever state/data changes later, React re-renders to update the DOM so it matches the new description.

## React.createElement

```js
const heading = React.createElement("h1", {}, "Hello World from React!");
```

**`React.createElement(...)`**
A function from the core React library (`react.development.js`). Its job is to create a React element — a plain JavaScript object that *describes* a piece of UI. It doesn't touch the actual webpage; it just builds a description of what you want, in memory.

It takes 3 arguments:

1. **`"h1"` — the type**
   What kind of element to create. Here it's a regular HTML tag, `h1`. (It could also be another React component instead of a string.)

2. **`{}` — the attributes/props**
   An object holding attributes for that element — things like `id`, `className`, `style`, `href`, etc. It's empty here because no attributes are being passed.

3. **`"Hello World from React!"` — the children**
   The content that goes *inside* the element — text, or even other React elements (for nesting).

**`heading`**
Just a variable name storing the result. `React.createElement` returns a JS object roughly like:
```js
{ type: "h1", props: { children: "Hello World from React!" } }
```
So `heading` is **not** yet an actual `<h1>` on the page — it's just data describing one. That's why `root.render(heading)` is needed afterward to actually place it in the real DOM.

**Mental model:** `React.createElement` writes a "recipe" for a piece of UI, and `render` is the step that actually "cooks" it and puts it on the page.

## Nesting elements & multiple siblings

**Nesting** — since the children argument of `React.createElement` can itself be another `React.createElement(...)` call, you can build a tree of elements (parent containing child containing grandchild, etc.):
```js
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm an h1 tag")
    )
);
```
This produces:
```html
<div id="parent">
  <div id="child">
    <h1>I'm an h1 tag</h1>
  </div>
</div>
```

**Multiple siblings (array)** — a single `children` slot normally holds one value. To render several elements side by side under the same parent, pass an **array** of elements as that child:
```js
React.createElement("div", { id: "child" },
    [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]
)
```
This renders both `h1` and `h2` as siblings inside `div#child`. (Note: in real JSX/React code, each item in such an array normally needs a unique `key` prop — that'll come up later once we move to JSX.)

## "React overwrites everything inside root" (mounting)

In the source `index4.html` file, `<div id="root"></div>` starts out empty — so there's nothing to "overwrite" at that point. But that's only true of the static HTML *before* React runs. Once `root.render(parent)` executes, React inserts the whole rendered tree inside `#root` — so at runtime, in the browser, that div is no longer empty; it now contains the actual `<div id="parent">...</div>` markup React generated. Open dev tools and inspect the Elements tab (not view-source) to see this live DOM.

But the concept itself is accurate: whatever content exists inside the element you point `createRoot()` at gets replaced by whatever React renders there. For example, if you had written:
```html
<div id="root">Loading, please wait...</div>
```
That "Loading, please wait..." text would disappear the moment `root.render(parent)` runs — React takes ownership of everything inside `#root` and replaces it with its own rendered output (the `parent` div tree, in this case).

So the rule is: React doesn't just *add* to the container — it takes over and controls the entire contents of that DOM node from then on. Anything manually placed there beforehand (or added by non-React code later) will get wiped out on the next render.

This whole process — React taking ownership of a DOM node and rendering its element tree into it — is called **mounting**:
- The `<div id="root">` is called the **root DOM node** (or **container**) — the mount point where the whole React app lives.
- `ReactDOM.createRoot(...)` creates the root; `root.render(...)` **mounts** the element tree into it, replacing (owning) whatever was there before.
- This is also why apps built this way are called **SPAs (Single Page Applications)** — `index.html` barely changes; React controls and re-renders everything inside that one container div as the app runs.

## CDN and `crossorigin`

**CDN** — instead of hosting the React library yourself, you load it from `unpkg.com`, a server that hosts popular npm packages for fast, ready-made access.

**`crossorigin`** — tells the browser to fetch the script under CORS rules since it's coming from another origin. Its real benefit: it lets you get proper, detailed error messages/stack traces if something inside that script fails — without it, cross-origin script errors just show up as a vague `"Script error."` in the console.
