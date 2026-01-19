# 🧠 Mohebi Lab Website

A modern, dark-themed academic lab website built with **Hugo Blox** (formerly Wowchemy/Academic) and hosted on **GitHub Pages**.

![Theme Preview](preview.png)

## ✨ Features

- **Dark & Glass Aesthetic**: High-contrast slate backgrounds with electric blue/purple accents
- **Modular Architecture**: Easy to update content via Markdown files
- **BibTeX Integration**: Manage publications via `.bib` files
- **Responsive Design**: Looks great on all devices
- **Auto-Deploy**: GitHub Actions workflow for seamless deployment

---

## 🚀 Quick Start

### Prerequisites

1. **Hugo Extended** (v0.128.0+): [Install Hugo](https://gohugo.io/installation/)
2. **Go** (1.21+): [Install Go](https://go.dev/dl/)
3. **Node.js** (20+): [Install Node.js](https://nodejs.org/)
4. **Git**: [Install Git](https://git-scm.com/)

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mohebi-lab-website.git
cd mohebi-lab-website

# Install Hugo modules
hugo mod get -u

# Start development server
hugo server -D

# View at http://localhost:1313
```

---

## 📁 Project Structure

```
mohebi-lab-website/
├── hugo.yaml                 # Main configuration
├── go.mod                    # Hugo modules
├── content/
│   ├── _index.md             # Homepage (widgets)
│   ├── authors/              # Team member profiles
│   │   └── ali-mohebi/
│   │       └── _index.md
│   ├── publication/          # Publications
│   │   └── mohebi-2019-nature/
│   │       └── index.md
│   ├── research/             # Research pages
│   ├── people/               # People listing page
│   └── join/                 # Join us page
├── assets/
│   └── css/
│       └── custom.css        # Dark glass theme styles
├── static/
│   └── images/               # Images, logos, photos
├── data/
│   └── publications.bib      # BibTeX database
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions
```

---

## 🖼️ Adding Images

### Team Photos

1. Create folder: `content/authors/person-name/`
2. Add profile image as `avatar.jpg` or `avatar.png`
3. Create `_index.md` with profile info

```
content/authors/jane-doe/
├── _index.md
└── avatar.jpg
```

### Research/Publication Images

Place images in the same folder as the content:

```
content/publication/my-paper/
├── index.md
└── featured.jpg    # Featured image for the publication
```

### Static Images (logos, funders, etc.)

Place in `static/images/`:

```
static/images/
├── nimh-logo.png
├── bbrf-logo.png
└── uw-crest.png
```

Reference in Markdown: `![Logo](/images/nimh-logo.png)`

---

## 📚 Managing Publications with BibTeX

### Option 1: Academic CLI (Recommended)

```bash
# Install academic CLI
pip install academic

# Import from BibTeX
academic import --bibtex data/publications.bib

# This creates publication folders in content/publication/
```

### Option 2: Manual Entry

Create a folder for each publication:

```markdown
---
# content/publication/my-paper-2024/index.md

title: "My Paper Title"
authors:
  - ali-mohebi
  - collaborator-name
date: "2024-01-15"
publication: "*Nature Neuroscience*"
publication_types: ["article-journal"]
doi: "10.1038/xxxxx"
featured: true

tags:
  - Dopamine
  - Working Memory

abstract: |
  Your abstract here...
---

Additional content about the paper...
```

### BibTeX File Structure

Edit `data/publications.bib`:

```bibtex
@article{mohebi2024new,
  title = {New Paper Title},
  author = {Mohebi, Ali and Others},
  journal = {Nature Neuroscience},
  year = {2024},
  doi = {10.1038/xxxxx},
  abstract = {Paper abstract...},
  keywords = {dopamine, learning}
}
```

Then run: `academic import --bibtex data/publications.bib`

---

## 👥 Adding Team Members

Create a new folder in `content/authors/`:

```markdown
---
# content/authors/jane-doe/_index.md

title: Jane Doe
first_name: Jane
last_name: Doe
role: Graduate Student

organizations:
  - name: University of Wisconsin-Madison
    url: https://www.wisc.edu/

bio: Brief bio here...

interests:
  - Dopamine
  - Electrophysiology

social:
  - icon: envelope
    icon_pack: fas
    link: mailto:jdoe@wisc.edu
  - icon: twitter
    icon_pack: fab
    link: https://twitter.com/janedoe

user_groups:
  - Graduate Students
---

Full bio content here...
```

---

## 🚢 Deploying to GitHub Pages

### Initial Setup

1. **Create GitHub Repository**
   ```bash
   # Initialize and push
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repo **Settings** → **Pages**
   - Under "Build and deployment" → **Source**: Select **GitHub Actions**

3. **Update Base URL**
   
   Edit `hugo.yaml`:
   ```yaml
   baseURL: 'https://YOUR_USERNAME.github.io/YOUR_REPO/'
   ```
   
   Or for a custom domain:
   ```yaml
   baseURL: 'https://lab.mohebial.com/'
   ```

4. **Push Changes**
   ```bash
   git add .
   git commit -m "Configure deployment"
   git push
   ```

The GitHub Action will automatically build and deploy your site!

### Custom Domain (Optional)

1. Add a `CNAME` file in `static/`:
   ```
   lab.mohebial.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or A records pointing to GitHub's IPs

---

## 🎨 Customizing the Theme

### Colors

Edit `assets/css/custom.css`:

```css
:root {
  --color-primary: #3b82f6;      /* Electric Blue */
  --color-secondary: #8b5cf6;    /* Electric Purple */
  --color-accent: #06b6d4;       /* Cyan */
  --color-bg-primary: #0f172a;   /* Deep Slate */
}
```

### Fonts

The theme uses:
- **Inter**: Body text
- **JetBrains Mono**: Code/technical labels

To change fonts, update the Google Fonts import in `layouts/partials/head.html`.

### Navigation

Edit `hugo.yaml`:

```yaml
menus:
  main:
    - name: Research
      url: '/research/'
      weight: 20
    - name: New Page
      url: '/new-page/'
      weight: 25
```

---

## 🛠️ Common Tasks

### Preview Changes Locally

```bash
hugo server -D
```

### Build for Production

```bash
hugo --gc --minify
```

### Update Hugo Modules

```bash
hugo mod get -u
hugo mod tidy
```

### Import New Publications

```bash
academic import --bibtex data/publications.bib
```

---

## 📖 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Blox Documentation](https://docs.hugoblox.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages](https://pages.github.com/)

---

## 📝 License

© 2025 The Board of Regents of the University of Wisconsin System

---

## 🤝 Contributing

For lab members: Create a branch, make changes, submit a pull request.

```bash
git checkout -b update-publications
# Make changes
git add .
git commit -m "Add new publication"
git push origin update-publications
# Open PR on GitHub
```
