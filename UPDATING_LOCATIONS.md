# Recommendations for Adding City Location Pages

To implement the new city landing pages effectively for SEO while maintaining the existing design system and performance, I recommend the following approach:

## 1. Component Refactoring (Dynamic Content)
Instead of hardcoding "Stone Mountain" in our shared components, we should refactor them to accept optional props. This allows us to reuse the exact same logic and styling across all pages.

### Files to Update:
- `components/sections/HeroSection.tsx`: Allow passing `cityName` and custom subtext.
- `components/sections/ServicesSection.tsx`: Ensure it uses the exact styling requirements for service cards.
- `components/sections/Footer.tsx`: Add the new city internal links to the footer.

## 2. Page Structure (Next.js App Router)
Create individual folders for each city in the `app` directory to ensure clean URLs and optimal SEO (e.g., `app/beauty-salon-lilburn/page.tsx`). Each page will:
- Use the refactored components.
- Include specific JSON-LD Schema for that city.
- Set unique Metadata (Title, Description, Canonical URL).

## 3. SEO Integrity & Rankings
- **Canonical Tags**: Each city page will have its own canonical URL pointing to itself to prevent "duplicate content" flags from Google.
- **Internal Linking**: Local links will be added to the footer and integrated into hero subtexts as requested.
- **Mastery Section**: The "Triny Promise" and guarantee banner will be included to maintain brand trust across all locations.

## 4. Implementation Steps
1. **Refactor Components**: Update Hero, Services, and Footer components to be city-aware.
2. **Setup Cities Data**: Create a configuration file or array containing the unique data for each city.
3. **Generate Pages**: Create the 8 city directories and pages using the shared template.
4. **Verification**: Audit the rendered HTML for correct Schema and Meta tags.
