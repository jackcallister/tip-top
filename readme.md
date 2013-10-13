A super simple tool tip plugin for learning how to create jQuery plugins. Easy to read and get the gist of how to make your own.

Usage:

1) Add the script to your project and include the styles.

2) Add a tool tip to your element.

```
<div data-tip-top="Here's my tool tip text">Yay</div>
```
3) Bind the tipTop function to your element.

```
$('[data-tip-top]').tipTop({
  position: 'top'
});
```

Options for the position are top and bottom and default is top.
