# Mohebi Lab Website

A modern, modular static website for the Mohebi & Associates cognitive neuroscience lab at UW-Madison.

## 🚀 Quick Start

### GitHub Pages Deployment

1. Create a new GitHub repository (e.g., `mohebi-lab.github.io` for organization pages or `lab-website` for project pages)
2. Push this code to the repository
3. Go to **Settings → Pages**
4. Under "Source", select the branch (usually `main`) and root folder (`/`)
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
mohebi-lab-website/
├── index.html              # Homepage
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # JavaScript for rendering
├── data/                   # ⭐ JSON data files (edit these!)
│   ├── config.json         # Site settings & navigation
│   ├── people.json         # Team members & collaborators
│   ├── research.json       # Research projects & techniques
│   ├── publications.json   # Publication list
│   ├── brain-talks.json    # Seminar series schedule
│   └── join.json           # Job positions & why join
├── pages/
│   ├── research.html
│   ├── people.html
│   ├── publications.html
│   ├── join.html
│   └── brain-talks.html
├── assets/
│   └── images/             # Place your images here
└── README.md
```

## ✏️ How to Update Content

### Adding/Editing Team Members

Edit `data/people.json`:

```json
{
  "members": [
    {
      "name": "New Person, PhD",
      "role": "Postdoctoral Scholar",
      "image": "person-name.jpg",
      "bio": "Bio text here...",
      "links": {
        "email": "email@wisc.edu",
        "twitter": "https://twitter.com/username"
      }
    }
  ]
}
```

### Adding Publications

Edit `data/publications.json`:

```json
{
  "featured": [
    {
      "title": "Paper Title",
      "authors": "Author A, Author B, ...",
      "journal": "Nature Neuroscience",
      "year": 2024,
      "doi": "10.xxxx/xxxxx",
      "featured": true
    }
  ]
}
```

### Adding Brain Talks

Edit `data/brain-talks.json`:

```json
{
  "talks": [
    {
      "date": "2026-03-15",
      "speaker": "Speaker Name",
      "title": "Talk Title",
      "institution": "University Name",
      "livestream": "https://zoom.link.here"
    }
  ]
}
```

### Changing Navigation

Edit `data/config.json`:

```json
{
  "navigation": [
    { "name": "Home", "href": "index.html" },
    { "name": "New Page", "href": "pages/new-page.html" }
  ]
}
```

## 🖼️ Adding Images

1. Place images in `assets/images/`
2. Reference them in JSON files by filename only (e.g., `"image": "photo.jpg"`)
3. The JavaScript will construct the full path

### Recommended Image Sizes

- Team member photos: 400x400px (will be displayed as circles)
- Research images: 800x600px
- Funder logos: 200x100px

## 🎨 Customizing Styles

Edit `css/styles.css`. Key CSS variables at the top:

```css
:root {
  --color-primary: #1a365d;      /* Main brand color */
  --color-accent: #e53e3e;       /* Accent/highlight color */
  --color-secondary: #319795;    /* Secondary color */
  --font-display: 'Source Serif 4', serif;
  --font-body: 'Source Sans 3', sans-serif;
}
```

## 📄 Adding a New Page

1. Create a new HTML file in `pages/` (copy an existing one as template)
2. Add the page to `data/config.json` navigation
3. Add any new data file if needed in `data/`
4. Add rendering function in `js/main.js` if needed

## 🔧 Technical Notes

- **No build step required** - Pure HTML/CSS/JS
- **No dependencies** - Uses Google Fonts CDN
- **Data-driven** - All content in JSON files
- **Responsive** - Works on mobile, tablet, desktop
- **Accessible** - Semantic HTML, proper contrast

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers

## 🐛 Troubleshooting

**Content not loading?**
- Check browser console for JSON parsing errors
- Ensure JSON files have valid syntax (use [JSONLint](https://jsonlint.com/))
- Make sure paths are correct (pages use `../data/`, root uses `data/`)

**Styles not applying?**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check CSS file path in HTML

## 📝 License

© 2025 The Board of Regents of the University of Wisconsin System
