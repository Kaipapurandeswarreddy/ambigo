const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add import
if (!content.includes('AchievementsMarquee')) {
  content = content.replace(
    /import WhyChooseAmbigo from '\.\.\/components\/WhyChooseAmbigo';/,
    `import WhyChooseAmbigo from '../components/WhyChooseAmbigo';\nimport AchievementsMarquee from '../components/AchievementsMarquee';`
  );
}

// 2. Remove the achRef hooks
content = content.replace(/\/\/ 4\. Achievements Scrolling Gallery[\s\S]*?\}, \[\]\);/, '');

// 3. Replace the scrolling gallery HTML with the component
content = content.replace(/\{\/\* Scrolling Gallery of Cards - Full Width \*\/\}[\s\S]*?\{\/\* Dots Navigation \*\/\}[\s\S]*?<\/div>\s*<\/div>/, 
`{/* Scrolling Gallery of Cards - Full Width */}
        <div className="relative w-full group/gallery">
          <AchievementsMarquee />
        </div>`);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Successfully updated Home.tsx!');
