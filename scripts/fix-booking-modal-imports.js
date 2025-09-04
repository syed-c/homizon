const fs = require('fs');
const path = require('path');

function fixBookingModalImports(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      fixedCount += fixBookingModalImports(itemPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const content = fs.readFileSync(itemPath, 'utf8');
      
      // Check if file has the problematic import
      if (content.includes('import { BookingModal }') || content.includes("import { BookingModal }")) {
        console.log(`Fixing: ${itemPath}`);
        
        // Replace named import with default import
        const fixedContent = content
          .replace(/import\s*{\s*BookingModal\s*}\s*from\s*['"]@\/components\/booking-modal['"];?/g, 
                   "import BookingModal from '@/components/booking-modal';")
          .replace(/import\s*{\s*([^}]*),\s*BookingModal\s*([^}]*)\s*}\s*from\s*['"]@\/components\/booking-modal['"];?/g, 
                   "import { $1$2 } from '@/components/booking-modal';\nimport BookingModal from '@/components/booking-modal';")
          .replace(/import\s*{\s*BookingModal\s*,\s*([^}]*)\s*}\s*from\s*['"]@\/components\/booking-modal['"];?/g, 
                   "import { $1 } from '@/components/booking-modal';\nimport BookingModal from '@/components/booking-modal';");
        
        if (fixedContent !== content) {
          fs.writeFileSync(itemPath, fixedContent);
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

console.log('🔧 Fixing BookingModal imports...');

const fixedCount = fixBookingModalImports('app');

console.log(`✅ Fixed ${fixedCount} BookingModal import issues`);