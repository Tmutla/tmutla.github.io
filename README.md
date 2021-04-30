# Tmulta
:wave: This is the Tmulta website repo

## Editing CSS
Adding custom clases should be put in to styles.css.

## Building CSS
See: https://tailwindcss.com/docs/installation  
Use command:  
```npx tailwindcss-cli@latest build ./css/styles.css -o ./css/tailwind.css```  
Reason:  
Builds Tailwinds so that we can use Tailwinds. Tailwinds is a utility first CSS design library.

## Building CSS for production
- Removes unused CSS  
```NODE_ENV=production npx tailwindcss-cli@latest build ./css/tailwind.css -o ./css/tailwind.css```

- https://www.themes.dev/blog/responsive-navigation-menu-tailwind-css/

## Resources
- Menu:  
https://www.alpinetoolbox.com/examples/  
https://codepen.io/KevinBatdorf/pen/ZEQJZMe  
- Font:  
https://freefontsdownload.net/free-lubalingraphstddemi-font-138391.htm  