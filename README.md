# react-stay-in-view

[![Version Badge][npm-version-svg]][package-url]
![NPM license](https://img.shields.io/npm/l/react-stay-in-view.svg?style=flat)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/orange)](http://makeapullrequest.com)
[![GZipped size][npm-minzip-svg]][bundlephobia-url]
[![Downloads][downloads-image]][downloads-url]
[![NPM total downloads](https://img.shields.io/npm/dt/react-stay-in-view.svg?style=flat)](https://npmcharts.com/compare/react-stay-in-view?minimal=true)

A hook and component to keep the element from disappearing from the screen when scrolling and resizing.

## Features

- 🚀 **Fast** - Built with hooks and functional components only.
- 🛠 **Written in TypeScript** - It'll fit right into your existing TypeScript
  project.
- 👫 **Cross-browser** - Works out-of-the-box for most browsers, regardless of version.
- 📲 **Mobile-friendly** - Supports mobile devices and touch screens.
- 🌳 **Tree-shakeable** - Only include the parts you use.
- 🗜 **Lightweight** - Around `~870B`.
- 💨 **No dependencies**

Try it live:
<br />
[![Try it live](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-stay-in-view-o7nm80)

![Preview](https://media.giphy.com/media/oAPxTZ5igLpLOPmID3/giphy.gif)

## Install

```bash
  # with npm
  npm install --save react-stay-in-view
  # with yarn
  yarn add react-stay-in-view
```

## Usage

### `useStayInView` hook

```js
import { useStayInView } from 'react-stay-in-view';

const StayInView = ({ className, children, anchorEl, placement }) => {
  const { ref } = useStayInView({ anchorEl, placement });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
```

**Props**

Output: `ref` - paste this `ref` in your component

| Name               | Description                                                          | Type          | Required | Default Value |
| ------------------ | -------------------------------------------------------------------- | ------------- | -------- | ------------- |
| anchorEl           | An element relative to which the new position will be fixed          | `HTMLElement` |          | `null`        |
| placement          | Element position relative to `anchorEl`                              | `string`      |          | `right-start` |
| avoidAnchorOverlap | Prevents `anchorEl` from overlapping when scrolling to screen border | `boolean`     |          | `true`        |

### `StayInView` component

```js
import { StayInView } from 'react-stay-in-view';

const App = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {isVisible && (
        <StayInView anchorEl={anchorEl}>
          <div>I stay on the screen</div>
        </StayInView>
      )}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
```

**Props**

| Name               | Description                                                          | Type          | Required | Default Value |
| ------------------ | -------------------------------------------------------------------- | ------------- | -------- | ------------- |
| children           | A children element                                                   | `ReactNode`   | ✅       |               |
| className          | Container class name.                                                | `string`      |          | `null`        |
| anchorEl           | An element relative to which the new position will be fixed          | `HTMLElement` |          | `null`        |
| placement          | Element position relative to `anchorEl`                              | `string`      |          | `right-start` |
| avoidAnchorOverlap | Prevents `anchorEl` from overlapping when scrolling to screen border | `boolean`     |          | `true`        |

<br />

## License

MIT © [vdmrgv](https://github.com/vdmrgv)

[package-url]: https://npmjs.org/package/react-stay-in-view
[npm-version-svg]: https://img.shields.io/npm/v/react-stay-in-view.svg
[npm-minzip-svg]: https://img.shields.io/bundlephobia/minzip/react-stay-in-view.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=react-stay-in-view
[license-image]: http://img.shields.io/npm/l/react-stay-in-view.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-stay-in-view.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-stay-in-view
