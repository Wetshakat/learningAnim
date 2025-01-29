
    const symbols = "012349@#$%^&*(){}[]<>";

    function createSymbol() {
        const symbol = document.createElement("div");
        symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.classList.add("rain");
        document.body.appendChild(symbol);

        symbol.style.left = Math.random() * window.innerWidth + "px";

        
        let speed = Math.random() * 4 + 4; 
        let position = 0;
        
        function fall() {
            position += speed;
            symbol.style.top = position + "px";

            if (position < window.innerHeight) {
                requestAnimationFrame(fall);
            } else {
                symbol.remove(); 
            }
        }

        fall();
    }

    setInterval(createSymbol, 100); 

