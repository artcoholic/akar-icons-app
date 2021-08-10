# Akar Icons
Akar is a perfectly rounded icon library made for designers, developers, and pretty much everyone. Use this library to bring life into your user interface and experience. Free to use for your personal and commercial projects. Start creating! Explore all of our icons at [akaricons.com](https://akaricons.com).

<a href="https://akaricons.com" target="_blank">
  <img alt="akar icons" src="https://repository-images.githubusercontent.com/306119910/c3a57000-2be0-11eb-88a2-2714f9bafcd4">
</a>

## Usage
There are currently 2 ways of implementing Akar Icons library to your website. The simplest one is through the [Icon Fonts](https://github.com/artcoholic/akar-icons-fonts) library just like Font Awesome and the other one is the [React](https://github.com/artcoholic/akar-icons) component package. 

### 1. Icon Fonts
This method is the simplest to use because you only need to add the script to the document `<head>`, and reference the icons with an `<i/>` tag along with the appropriate class. Icon fonts are HTML/CSS under the hood so you can style and manipulate it just like any other HTML element.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/akar-icons-fonts"></script>
  </head>
  <body>
    <!-- EXAMPLE ICONS -->
    <i class="ai-cross"></i>
    <i class="ai-circle"></i>
    <i class="ai-heart"></i>
  </body>
</html>
```

Check out the full documentation at [akar-icons-fonts](https://github.com/artcoholic/akar-icons-fonts) repo page.

### 2. React
The React icon component library can be installed through `npm i akar-icons`. All icons can be configured with inline props with `color`, `size`, and `strokeWidth` including inline `style` objects.

```jsx
import { ArrowRight, Star, LinkOut } from 'akar-icons';

const MyComponent = () => {
  return (
    <div>
      <ArrowRight />
      <Star color="yellow" size={32} strokeWidth={3} style={{ display: "block" }}/>
      <LinkOut />
    </div>
  );
};

export default MyComponent;
```

Check out the full documentation at [akar-icons](https://github.com/artcoholic/akar-icons) repo page.

## Related Projects
* [akar-icons](https://github.com/artcoholic/akar-icons) - Akar icons as React components.
* [akar-icons-fonts](https://github.com/artcoholic/akar-icons-fonts) - Akar icons as icon fonts.
* [akar-icons-svelte](https://github.com/WilliamVenner/akar-icons-svelte) - Akar icons as Svelte components.
* [blade-akar-icons](https://github.com/codeat3/blade-akar-icons) - A package to easily make use of Akar Icons in your Laravel Blade views.

## Author
Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))

## License
[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa.