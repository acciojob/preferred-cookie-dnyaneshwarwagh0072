 document.addEventListener("DOMContentLoaded", function() {
            function getCookie(name) {
                let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : null;
            }
            
            let savedFontSize = getCookie("fontsize");
            let savedFontColor = getCookie("fontcolor");

            if (savedFontSize) {
                document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
                document.getElementById("fontsize").value = savedFontSize;
            }
            
            if (savedFontColor) {
                document.documentElement.style.setProperty('--fontcolor', savedFontColor);
                document.getElementById("fontcolor").value = savedFontColor;
            }

            document.getElementById("customizationForm").addEventListener("submit", function(event) {
                event.preventDefault();
                let fontSize = document.getElementById("fontsize").value;
                let fontColor = document.getElementById("fontcolor").value;

                document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`;
                document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;

                document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
                document.documentElement.style.setProperty('--fontcolor', fontColor);
            });
        });