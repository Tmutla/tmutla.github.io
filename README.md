# Tmulta
:wave: This is the Tmulta website repo

## Editing CSS
Adding custom clases should be put in to styles.css.

## Building CSS
See: https://tailwindcss.com/docs/installation  
Use command:  
```npx tailwindcss-cli@latest build ./css/styles.css -o ./css/tailwinds.css```  
Reason:  
Builds Tailwinds so that we can use Tailwinds. Tailwinds is a utility first CSS design library.

## Building CSS for production
- Removes unused CSS  
```NODE_ENV=production npx tailwindcss-cli@latest build ./css/tailwind.css -o ./css/tailwind.css```

- https://www.themes.dev/blog/responsive-navigation-menu-tailwind-css/