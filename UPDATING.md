# Website Update Instructions

This document provides comprehensive instructions for updating the Mohebi Lab website. The website is built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Adding Content](#adding-content)
4. [Updating Existing Content](#updating-existing-content)
5. [Adding Images](#adding-images)
6. [Styling and Components](#styling-and-components)
7. [Building and Deploying](#building-and-deploying)
8. [Common Tasks](#common-tasks)
9. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager
- Code editor (VS Code recommended)
- Git for version control

### Initial Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/mohebi-n-associates/website.git
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

---

## Project Structure

```
website/
├── public/                 # Static assets
│   └── images/            # All images
│       ├── people/        # Team member photos
│       └── techniques/    # Technique illustrations
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Home page
│   │   ├── layout.tsx     # Root layout
│   │   ├── globals.css    # Global styles
│   │   ├── components/    # Page-specific components
│   │   ├── join/          # Join page
│   │   ├── news/          # News page
│   │   ├── people/        # People/Team page
│   │   ├── publications/  # Publications page
│   │   ├── research/      # Research page
│   │   └── techniques/    # Techniques page
│   ├── components/        # Shared components
│   │   ├── Header.tsx     # Site header/navigation
│   │   └── Footer.tsx     # Site footer
│   └── data/              # Content data files
│       ├── people.ts      # Team member data
│       ├── publications.ts # Publication data
│       ├── research.ts    # Research areas
│       └── techniques.ts  # Techniques data
├── package.json           # Project dependencies
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

---

## Adding Content

### Adding a New Team Member

1. **Add the person's photo**:
   - Place the image in `public/images/people/`
   - Use format: `firstname-lastname.jpg` (or .png)
   - Recommended size: 400x400px, square aspect ratio

2. **Update the data file** at `src/data/people.ts`:
   ```typescript
   {
       id: 'john-doe',
       name: 'John Doe',
       role: 'Graduate Student' or 'Postdoctoral Researcher' or 'Research Assistant',
       bio: 'Brief description of research interests and background.',
       image: '/images/people/john-doe.jpg',
       email: 'jdoe@wisc.edu',
       twitter: 'https://twitter.com/johndoe',  // Optional
       scholar: 'https://scholar.google.com/citations?user=...',  // Optional
       github: 'https://github.com/johndoe',  // Optional
       alumni: false  // Set to true when they leave the lab
   }
   ```

3. **Save the file** - changes will appear automatically in development mode.

### Adding a Publication

Update `src/data/publications.ts`:

```typescript
{
    id: 'unique-identifier-2024',  // Format: lastname-year-keyword
    title: 'Full publication title',
    authors: ['Author A', 'Author B', 'Your Name', 'Senior Author'],
    journal: 'Journal Name',
    year: 2024,
    doi: '10.xxxx/xxxxx',  // Optional but recommended
    pdf: '/papers/lastname-2024.pdf'  // Optional, place PDF in public/papers/
}
```

**Tips:**
- List authors in the exact order as published
- For DOI, use the identifier only (not the full URL)
- Publications are typically sorted by year (newest first)
- Add the actual PDF to `public/papers/` if you want to host it

### Adding a Research Area

Update `src/data/research.ts`:

```typescript
{
    id: 'unique-identifier',
    title: 'Research Area Title',
    description: 'Detailed description of what this research area encompasses.',
    icon: 'BrainCircuit',  // Lucide icon name (see below for options)
}
```

**Available Lucide Icons:**
- `BrainCircuit` - Brain and neural circuits
- `Activity` - Activity/signal traces
- `Target` - Goals/targeting
- `Microscope` - Imaging/observation
- `Cpu` - Computation/modeling
- `Zap` - Electrical/neural activity
- See [Lucide Icons](https://lucide.dev/icons/) for more options

### Adding a Technique

Update `src/data/techniques.ts`:

```typescript
{
    id: 'technique-name',
    title: 'Technique Name',
    description: 'Detailed description of the technique, its applications, and significance.',
    icon: 'Microscope',  // Lucide icon name
    color: 'blue' | 'purple' | 'cyan',  // Choose one
    image: '/images/techniques/technique-name.jpg'  // Optional
}
```

---

## Updating Existing Content

### Modifying Team Member Information

1. Open `src/data/people.ts`
2. Find the person's entry by their `id`
3. Update any field (name, role, bio, links, etc.)
4. Save the file

**To mark someone as alumni:**
```typescript
{
    id: 'person-id',
    name: 'Name',
    // ... other fields ...
    alumni: true  // Add or change this field
}
```

### Updating Publications

1. Open `src/data/publications.ts`
2. Find the publication by its `id`
3. Update any field
4. Save the file

**Common updates:**
- Adding DOI after publication
- Adding PDF link
- Correcting author names or journal information

### Editing Page Content

#### Home Page
Edit `src/app/page.tsx` to modify:
- Welcome message
- Lab introduction
- Featured content

#### Other Pages
Each page has its own directory:
- Join page: `src/app/join/page.tsx`
- News page: `src/app/news/page.tsx`
- People page: `src/app/people/page.tsx`
- Publications page: `src/app/publications/page.tsx`
- Research page: `src/app/research/page.tsx`
- Techniques page: `src/app/techniques/page.tsx`

### Updating Navigation

Edit `src/components/Header.tsx` to modify:
- Navigation links
- Logo
- Header styling

### Updating Footer

Edit `src/components/Footer.tsx` to modify:
- Footer content
- Social links
- Contact information

---

## Adding Images

### Where to Place Images

```
public/
├── images/
│   ├── people/          # Team member photos
│   ├── techniques/      # Technique illustrations
│   └── research/        # Research images (if needed)
├── papers/              # PDF publications (if hosting)
└── logos/               # Lab logos, university logos
```

### Image Guidelines

1. **Format**: Use JPEG for photos, PNG for graphics with transparency
2. **Size**: 
   - People photos: 400x400px (1:1 aspect ratio)
   - Technique images: 1200x800px (3:2 aspect ratio)
   - Keep file size under 500KB
3. **Naming**: Use lowercase with hyphens (e.g., `john-doe.jpg`)
4. **Optimization**: Compress images before uploading using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - ImageOptim (macOS)

### Referencing Images in Code

In data files:
```typescript
image: '/images/people/john-doe.jpg'
```

In React components:
```tsx
<img src="/images/people/john-doe.jpg" alt="John Doe" />
```

Or using Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/images/people/john-doe.jpg" 
  alt="John Doe"
  width={400}
  height={400}
/>
```

---

## Styling and Components

### Tailwind CSS

The website uses Tailwind CSS for styling. Common classes:

**Colors:**
- `text-blue-600`, `bg-blue-100`, `border-blue-300`
- `text-purple-600`, `bg-purple-100`, `border-purple-300`
- `text-gray-600`, `bg-gray-100`, `border-gray-300`

**Spacing:**
- `p-4` (padding), `m-4` (margin)
- `px-6` (horizontal padding), `py-4` (vertical padding)
- `gap-4` (grid/flex gap)

**Layout:**
- `flex`, `grid`, `flex-col`, `grid-cols-3`
- `items-center`, `justify-center`
- `max-w-7xl`, `container`, `mx-auto`

**Typography:**
- `text-xl`, `text-2xl`, `text-3xl`
- `font-bold`, `font-semibold`
- `leading-relaxed`, `tracking-wide`

**Responsive:**
- `md:text-2xl` (applies at medium screens and up)
- `lg:grid-cols-4` (applies at large screens and up)

### Creating New Components

1. Create a new file in `src/components/` or `src/app/components/`
2. Use TypeScript and React:

```tsx
// src/components/MyComponent.tsx
interface MyComponentProps {
    title: string;
    description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
    return (
        <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{title}</h3>
            {description && <p className="text-gray-600">{description}</p>}
        </div>
    );
}
```

3. Import and use in pages:
```tsx
import MyComponent from '@/components/MyComponent';

<MyComponent title="Hello" description="World" />
```

---

## Building and Deploying

### Local Production Build

Test the production build locally:

```bash
npm run build
npm run start
```

### Deployment

#### Option 1: Vercel (Recommended)

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything

2. **Automatic deployments**:
   - Every push to `main` branch triggers a production deployment
   - Pull requests create preview deployments

#### Option 2: Other Platforms

The website can be deployed to:
- **Netlify**: Similar to Vercel
- **AWS Amplify**: AWS-based hosting
- **Railway**: Simple deployment platform
- **Your own server**: Build and serve with Node.js

**Build command**: `npm run build`
**Start command**: `npm run start`
**Output directory**: `.next`

### Custom Domain

1. Add domain in your hosting platform (Vercel, Netlify, etc.)
2. Update DNS records as instructed
3. SSL certificates are typically handled automatically

---

## Common Tasks

### Adding a News Post

If you want to add news functionality:

1. Create a news data file: `src/data/news.ts`
```typescript
export interface NewsItem {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    content: string;
    link?: string;
}

export const news: NewsItem[] = [
    {
        id: 'grant-2024',
        title: 'Lab Receives NIH R01 Grant',
        date: '2024-03-15',
        content: 'We are excited to announce...',
        link: 'https://...'
    }
];
```

2. Update `src/app/news/page.tsx` to display the news items

### Updating the Home Page Hero

Edit `src/app/page.tsx` to change:
- Hero heading
- Lab description
- Featured image or animation

### Changing Colors/Theme

1. Open `src/app/globals.css`
2. Modify CSS variables or Tailwind classes
3. Or update Tailwind config in `tailwind.config.js`

### Adding a New Page

1. Create a new directory in `src/app/`, e.g., `src/app/teaching/`
2. Add a `page.tsx` file:
```tsx
export default function TeachingPage() {
    return (
        <div>
            <h1>Teaching</h1>
            {/* Your content */}
        </div>
    );
}
```
3. Add navigation link in `src/components/Header.tsx`

### Enabling Contact Form

You'll need to:
1. Choose a form service (Formspree, EmailJS, SendGrid, etc.)
2. Create a contact form component
3. Add API route in `src/app/api/contact/route.ts`
4. Configure email sending

---

## Troubleshooting

### Development Server Won't Start

**Error: Port 3000 already in use**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

**Error: Module not found**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json  # or yarn.lock, pnpm-lock.yaml
npm install
```

### Images Not Showing

1. **Check file path**: Ensure path starts with `/` and matches the file in `public/`
2. **Check file name**: File names are case-sensitive
3. **Check file exists**: Verify the file is actually in `public/images/`
4. **Clear cache**: Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Styles Not Updating

1. **Restart dev server**: Stop (Ctrl+C) and run `npm run dev` again
2. **Clear .next folder**: 
   ```bash
   rm -rf .next
   npm run dev
   ```
3. **Check for syntax errors**: Look in terminal for error messages

### Build Errors

**Type errors**:
- Check TypeScript errors in terminal
- Ensure all required properties are provided
- Verify imports are correct

**ESLint errors**:
```bash
npm run lint
```
Fix any reported issues

### Deployment Issues

1. **Check build logs** in your hosting platform
2. **Test locally**: Run `npm run build` to catch build errors
3. **Environment variables**: Ensure all required env vars are set in hosting platform
4. **Check Node.js version**: Ensure platform uses Node.js 20+

---

## Best Practices

### Content Updates

1. **Always test locally** before pushing to production
2. **Use descriptive commit messages**: "Add John Doe to team page"
3. **Review changes** in browser before committing
4. **Keep backups** of important content
5. **Update regularly** to keep content fresh

### Code Changes

1. **Follow TypeScript types** - they prevent errors
2. **Keep components small** and focused
3. **Reuse components** instead of duplicating code
4. **Comment complex logic**
5. **Test responsive design** on mobile, tablet, and desktop

### Image Management

1. **Optimize images** before uploading
2. **Use consistent sizes** for similar content types
3. **Include alt text** for accessibility
4. **Remove unused images** to keep repo clean

### Git Workflow

1. **Create a branch** for significant changes:
   ```bash
   git checkout -b update-team-page
   ```

2. **Make your changes** and test

3. **Commit with clear message**:
   ```bash
   git add .
   git commit -m "Add new postdoc to team page"
   ```

4. **Push and create pull request**:
   ```bash
   git push origin update-team-page
   ```

5. **Review and merge** on GitHub

---

## Quick Reference

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Install new package
npm install package-name

# Update all dependencies
npm update
```

### Important Files Quick Reference

| Content Type | File to Edit | Image Location |
|-------------|--------------|----------------|
| Team members | `src/data/people.ts` | `public/images/people/` |
| Publications | `src/data/publications.ts` | `public/papers/` |
| Research areas | `src/data/research.ts` | N/A |
| Techniques | `src/data/techniques.ts` | `public/images/techniques/` |
| Home page | `src/app/page.tsx` | Various |
| Navigation | `src/components/Header.tsx` | N/A |
| Footer | `src/components/Footer.tsx` | N/A |

---

## Getting Help

### Resources

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation**: [https://react.dev](https://react.dev)
- **Tailwind CSS Docs**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript Handbook**: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- **Lucide Icons**: [https://lucide.dev](https://lucide.dev)

### Support

- Check existing issues on GitHub
- Create a new issue with:
  - Clear description of the problem
  - Steps to reproduce
  - Screenshots if relevant
  - Error messages from terminal

---

## Appendix: Data Structure Reference

### Person Interface
```typescript
interface Person {
    id: string;           // Unique identifier (lowercase-with-hyphens)
    name: string;         // Full name
    role: string;         // Position/role in lab
    bio: string;          // Short biography
    image: string;        // Path to photo: '/images/people/name.jpg'
    email?: string;       // Email address (optional)
    twitter?: string;     // Twitter URL (optional)
    scholar?: string;     // Google Scholar URL (optional)
    github?: string;      // GitHub URL (optional)
    alumni?: boolean;     // Is this person an alumnus? (optional)
}
```

### Publication Interface
```typescript
interface Publication {
    id: string;           // Unique identifier
    title: string;        // Paper title
    authors: string[];    // Array of author names
    journal: string;      // Journal or venue name
    year: number;         // Publication year
    doi?: string;         // DOI identifier (optional)
    pdf?: string;         // Path to PDF (optional)
}
```

### Research Area Interface
```typescript
interface ResearchArea {
    id: string;           // Unique identifier
    title: string;        // Research area title
    description: string;  // Detailed description
    icon: string;         // Lucide icon name
}
```

### Technique Interface
```typescript
interface Technique {
    id: string;                              // Unique identifier
    title: string;                           // Technique name
    description: string;                     // Detailed description
    icon: string;                            // Lucide icon name
    color: 'blue' | 'purple' | 'cyan';      // Color theme
    image?: string;                          // Path to image (optional)
}
```

---

**Last Updated**: January 2026
**Maintainer**: Lab Website Team
