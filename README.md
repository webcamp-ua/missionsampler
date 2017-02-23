# missionsampler
Sample Project

See the [demo at https://webcamp-ua.github.io/missionsampler/](https://webcamp-ua.github.io/missionsampler/)

This project is a sample for demonstration of [react](https://facebook.github.io/react/) + [reeact-toolbox](http://react-toolbox.com/#/) + [webpack v1](https://webpack.github.io/) UI theming as described in the article.

In this branch I've tried the option to add theme [using SASS imports and props](https://github.com/react-toolbox/react-toolbox/tree/master#using-sass-imports-and-props). In particular in 'ThemedButton' component.

---
JavaScript

```javascript
import React from 'react';
import { Button } from 'react-toolbox/lib/button/Button';
import buttonTheme from './button.scss';

const ThemedButton = (props) => (
    <Button theme={buttonTheme}  {...props} />
);

export default ThemedButton;
```

---
SCSS

```scss
@import "~react-toolbox/lib/button/theme";

.button{
  color: green !important;
}
```

### To run in dev mode:
 
``` 
npm install
npm run dev 
 
```
 
### To run in production mode:
 
``` 
npm install
npm run build
npm start

```

