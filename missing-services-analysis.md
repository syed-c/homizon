# Missing Services Analysis

## Required Services vs Existing Service Directories

### Required Services (from audit prompt):
1. appliance-repair
2. ac-repair-cleaning  
3. washing-machine-repair
4. refrigerator-repair
5. dishwasher-repair
6. oven-stove-repair
7. dryer-repair
8. wine-cooler-repair
9. ice-maker-repair
10. cleaning-services
11. deep-home-cleaning
12. sofa-cleaning
13. carpet-cleaning
14. mattress-cleaning
15. kitchen-cleaning
16. bathroom-cleaning
17. move-in-move-out-cleaning
18. general-pest-control
19. cockroach-control
20. bed-bug-treatment
21. termite-control
22. rodent-control
23. disinfection-sanitization
24. electrical
25. plumbing
26. ac-servicing
27. painting
28. curtain-tv-furniture-installations
29. general-handyman
30. laundry-dry-cleaning
31. packers-movers

### Current Service Directories:
- ac-cleaning ✓
- ac-repair ✓
- ac-servicing ✓
- appliance-repairs ✓ (should be appliance-repair)
- bathroom-cleaning ✓
- bathroom-plumbing ✓
- bed-bug-control ✓ (should be bed-bug-treatment)
- carpet-cleaning ✓
- cleaning-services ✓
- handyman-services ✓ (should be general-handyman)
- pest-control ✓ (should be general-pest-control)

### Missing Service Pages:
1. /services/appliance-repair/ (general category page)
2. /services/ac-repair-cleaning/ (general category page)
3. /services/washing-machine-repair/
4. /services/refrigerator-repair/
5. /services/dishwasher-repair/
6. /services/oven-stove-repair/
7. /services/dryer-repair/
8. /services/wine-cooler-repair/
9. /services/ice-maker-repair/
10. /services/deep-home-cleaning/
11. /services/sofa-cleaning/
12. /services/mattress-cleaning/
13. /services/kitchen-cleaning/
14. /services/move-in-move-out-cleaning/
15. /services/cockroach-control/
16. /services/bed-bug-treatment/
17. /services/termite-control/
18. /services/rodent-control/
19. /services/disinfection-sanitization/
20. /services/electrical/
21. /services/plumbing/
22. /services/painting/
23. /services/curtain-tv-furniture-installations/
24. /services/laundry-dry-cleaning/
25. /services/packers-movers/

## Action Plan:
1. Create missing /services/<service-slug>/ pages using dynamic route
2. Verify all service×area combinations exist
3. Check all area pages exist
4. Verify sub-area pages exist
5. Update navigation and sitemap