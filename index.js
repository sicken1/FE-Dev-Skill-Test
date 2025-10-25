document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const productGrid = document.querySelector('.product-grid');

    //Defines content for each tab
    const tabContent = {
        sizes: `
            <div class="card">
                <img src="assets/Single-Bed.png" alt="Single-Bed-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Single</span> Bed</h4>
                    <p>Compact bed ideal for kids or small spaces.</p>
                </div>
                <div class="tags">
                    <span>36 in x 75 in</span>
                    <span>91 cm x 191 cm</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Twin-Bed.png" alt="Twin-Bed-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Twin</span> Bed</h4>
                    <p>Great for solo sleepers or guest rooms.</p>
                </div>
                <div class="tags">
                    <span>39 in x 75 in</span>
                    <span>99 cm x 191 cm</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Double-Full.png" alt="Double-full-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Double</span> / Full</h4>
                    <p>Cozy for two, spacious for one.</p>
                </div>
                <div class="tags">
                    <span>54 in x 75 in</span>
                    <span>137 cm x 191 cm</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Queen-Size.png" alt="Queen-Size-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Queen</span> Size</h4>
                    <p>Most popular size for couples.</p>
                </div>
                <div class="tags">
                    <span>60 in x 80 in</span>
                    <span>152 cm x 203 cm</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/King-Size.png" alt="King-Size-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">King</span> Size</h4>
                    <p>Extra-long bed for tall people; perfect for families.</p>
                </div>
                <div class="tags">
                    <span>76 in x 80 in</span>
                    <span>193 cm x 203 cm</span>
                </div>
            </div>`,
        types: `
            <div class="card">
                <img src="assets/Foldable-Bed.png" alt="Foldable-Bed-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Foldable</span> Bed</h4>
                    <p>Soft, portable, and flexible. Can be folded for easy storage and transport.</p>
                </div>
                <div class="tags">
                    <span>Small Spaces</span>
                    <span>Guest Room</span>
                    <span>Quick Setup</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Trundle-Bed.png" alt="Trundle-Bed-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Trundle</span> Bed</h4>
                    <p>Space-saving functionality. It slides under another bed - easy extra sleeping space.</p>
                </div>
                <div class="tags">
                    <span>Combo Sleeper</span>
                    <span>Guest Room</span>
                    <span>Families with Kids</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Spring-Mattress.png" alt="Spring-Mattress-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Spring</span> Mattress</h4>
                    <p>Firm, lifted, and breathable. It has classic feel with coil support and airflow.</p>
                </div>
                <div class="tags">
                    <span>Back Sleeper</span>
                    <span>Stomach Sleeper</span>
                    <span>Hot Sleeper</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Foam-Mattress.png" alt="Foam-Mattress-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Foam</span> Mattress</h4>
                    <p>Light with simple comfort. Also budget-friendly and versatile.</p>
                </div>
                <div class="tags">
                    <span>Kids Room</span>
                    <span>Light Sleeper</span>
                    <span>Short Term Comfort</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Latex-Foam.png" alt="Latex-Foam-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Latex</span> Foam</h4>
                    <p>Firm but bouncy, naturally cool. Also breathable, hypoallergenic, eco-friendly, durable.</p>
                </div>
                <div class="tags">
                    <span>Combo Sleepers</span>
                    <span>Hot Sleepers</span>
                    <span>Allergy-prone User</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Memory-Foam.png" alt="Memory-Foam-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Memory</span> Foam</h4>
                    <p>Adapts to your body, relieves pressure, isolates movement</p>
                </div>
                <div class="tags">
                    <span>Side Sleeper</span>
                    <span>COuples</span>
                    <span>With Back Pain</span>
                </div>
            </div>`,
        firmness: `
            <div class="card">
                <img src="assets/Plush.png" alt="Plush-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Plush</span></h4>
                    <p>Very soft and cushiony - you'll sink in and feel hugged. Great for pressure relief.</p>
                </div>
                <div class="tags">
                    <span>Side Sleeper</span>
                    <span>Light Sleeper</span>
                    <span>With backpain</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Medium-Plush.png" alt="Medium-Plush-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Medium</span> Plush</h4>
                    <p>Still soft, but with a little more pushback. A cozy balance of contour and support.</p>
                </div>
                <div class="tags">
                    <span>Side Sleeper</span>
                    <span>Combo Sleeper</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Firm.png" alt="Firm-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Firm</span></h4>
                    <p>More solid, with less give. Keeps your body lifted and aligned.</p>
                </div>
                <div class="tags">
                    <span>Back Sleeper</span>
                    <span>Stomach Sleeper</span>
                    <span>Heavier Individual</span>
                </div>
            </div>
            <div class="card">
                <img src="assets/Medium-Firm.png" alt="Medium-Firm-Photo">
                <div class="card-content">
                    <h4 class="darkblue-specific"><span class="lightblue-specific">Medium</span> Firm</h4>
                    <p>Balanced - not too soft, not too hard. Just the right mix of comfort and support. Keeps your spine 
                    aligned without too much</p>
                </div>
                <div class="tags">
                    <span>Stomach Sleeper</span>
                    <span>Heavier Sleeper</span>
                    <span>Back Condition</span>
                </div>
            </div>`
        };
    //Event listener for tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            //Update active tab visually
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const activeTab = tab.getAttribute('data-tab');

            //Fade out
            productGrid.classList.add('fade-out');

            setTimeout(() => {
                //Replace content after fade out
                productGrid.innerHTML = tabContent[activeTab];

                //Fade in
                productGrid.classList.remove('fade-out');
            }, 350);
        });
    });
});