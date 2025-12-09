# Second Renaissance

**Live site: [secondrenaissance.vercel.app](https://secondrenaissance.vercel.app)**

Mapping the hidden libraries of Western esotericism. Part of the Source Library Project.

## What We Study

- **The Hidden Corpus**: 533,000 Latin works printed 1450-1700. Theology, philosophy, alchemy, magic, natural philosophy—the intellectual DNA of modernity, largely unread.
- **Esoteric Traditions**: Hermetica, Kabbalah, alchemy, Rosicrucianism, natural magic—tracing how ancient wisdom flowed through Renaissance publishing into the modern age.
- **AI Translation**: Using large language models to unlock texts that will never receive professional translation.

## The Scale of the Problem

| Metric | Value |
|--------|-------|
| Latin editions (USTC 1450-1700) | 533,000 |
| Unique works (estimated) | ~100,000 |
| Translated to English | ~3% |
| Inaccessible to non-Latinists | 97% |

## Site Structure

- `/` - Landing page
- `/explore` - USTC data explorer with interactive visualizations
- `/roadmap` - Translation priority roadmap
- `/blog` - Research notes
- `/blog/esoteric-timeline` - Visual timeline of esoteric publishing (1469-1750)
- `/map` - Geographic visualization of printing centers
- `/timelines` - Timeline charts

## Data Sources

- [Universal Short Title Catalogue (USTC)](https://www.ustc.ac.uk/) - University of St Andrews
- [Library of Latin Texts (Brepols)](https://www.brepolis.net/)
- [Philological Museum](https://philological.cal.bham.ac.uk/) - University of Birmingham

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

The site is deployed to Vercel. The Vercel project is named `ancientwisdomresearch` but the public URL is `secondrenaissance.vercel.app` (configured as an alias).

### Deploy to Production

```bash
# Step 1: Deploy to Vercel
vercel --prod

# Step 2: Update the alias to point to the new deployment
# Get the deployment URL from step 1 (e.g., ancientwisdomresearch-xxxxx-dereklomas-projects.vercel.app)
vercel alias set <deployment-url> secondrenaissance.vercel.app
```

### Why Two Steps?

The `secondrenaissance.vercel.app` domain is an alias pointing to a specific deployment. When you run `vercel --prod`, it updates the main project URL (`ancientwisdomresearch.vercel.app`) but doesn't automatically update aliases. You must manually update the alias to point to the new deployment.

## License

Data from USTC used under their terms of service. Code is MIT licensed.
