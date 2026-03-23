# Zariya Website

Built with Jekyll for GitHub Pages.

## Setup

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser.

## Updating content (no code needed)

| What to change | File to edit |
|---|---|
| Homepage text | `index.md` |
| About / story | `about/index.md` |
| Program details | `program/index.md` |
| Team bios | `team/index.md` |
| Contact info | `contact/index.md` |
| Site name / email / phone | `_config.yml` |
| Navigation links | `_config.yml` → `nav_links` |

Each `.md` file uses simple Markdown. Just edit the text between the HTML tags and save.

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `zariya-site`)
2. Push this folder to `main` branch
3. Go to repo Settings → Pages → Source: `main` branch, `/` (root)
4. Your site will be live at `https://yourusername.github.io/zariya-site/`

If using a custom domain, add a `CNAME` file to the root with your domain name.
