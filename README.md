# 12 Axes: Group Results

A static site comparing a friend group's [12 Axes](https://12axes.vercel.app) political quiz results.

| Page | File |
| --- | --- |
| Overview: roster, 12-axis heatmap, compass, findings | `index.html` |
| Beyond the top match: other ideologies, places, figures, parties, books | `beyond.html` |
| Homestead Ideal Government: a profile built from the group's extremes | `homestead.html` |
| What if we took the other side: the same method, losing side instead | `other-side.html` |
| Data downloads | `data.html` |

## Publish on GitHub Pages

1. Create a new repository on GitHub (public, or private on a plan that supports Pages).
2. Upload or push the contents of this folder to the repository root:
   ```bash
   git init
   git add .
   git commit -m "12 Axes group results"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

The site is plain HTML with no build step. Fonts load from Google Fonts. `.nojekyll` tells GitHub Pages to serve the files as-is.

## Data (`data/`)

| File | Contents |
| --- | --- |
| `profiles.csv` | One row per person: top ideology, family, match %, closest country, historical match, figure, active and historical party, era, compass label, other and furthest ideologies, top book |
| `axes_wide.csv` | 12 axis positions per person, plus derived compass coordinates |
| `axes_long.csv` | Same positions, one row per person per axis, with the report's label and the site's share-link value |
| `figures.csv` | Eight closest figures (with match %) and three furthest per report |
| `places_top10.csv` | "10 countries or regions to live in" per report, with match % |
| `cabinets.csv` | Ideal-government cabinets, seat by seat (plus the friend-based guesses for the two Homesteads) |
| `homestead_derivation.csv` | Top-3 trios and averages per axis behind Homestead and the Other Homestead |
| `data.json` | Everything above in one file |

### Conventions

- **Position scale:** 0 = fully toward the first pole of an axis (Federal, Public, Democracy, Planning, Security, Protectionism, Assimilation, Irreligious, Militarist, Progressive, Non-interventionist, Technology), 100 = fully toward the second pole, 50 = the report says *Balanced* (no number is given).
- **Compass (page 1):** economic = average of Economy and Control; authority = average of Representation and the security side of Power.
- **Homestead:** for each axis, average the three people furthest toward each pole and keep the stronger side. **Other Homestead** keeps the weaker side. Both use 11 of the 12 members.
- **Reference figures** (Mao Zedong, Adolf Hitler, Donald Trump, Xi Jinping) use the 12-axis values on the site's public personality pages.

## Sources

- Each member's 12 Axes full report (PDF), generated November 7, 2026.
- 12 Axes public personality pages for the reference figures.
- 12 Axes full reports for Homestead and the Other Homestead, generated from the share links in `data/data.json`.

12 Axes describes its matches as "not a scientific diagnosis or a definitive label".
