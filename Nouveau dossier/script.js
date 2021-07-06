
        
        // Cost of all products in the cart
        var total = 0;
        // Index
        var i = 1;
        // Message 
        var message = "Please select a size";
        // List of the amount of every product in the cart
        var itemCost = [];

        // Add to cart
        function add(n){
            // n is the rank of the T-shirt
            sizeId = "size" + n;
            /* Each shirt has Id start with a root + his rank (Ex: Size id for product 1 is size1,
             price id for product 3 is price 3 ...)*/
            messageId = "message" + n;
            // The size of the selected shirt
            size = document.getElementById(sizeId).value;
            // If the client don't select size, a message will show up
            if (size==="size"){
                document.getElementById(messageId).innerHTML = message;
                return 0;
            }
            // Getting all Id of the selected shirt(brand ex: nike, price and quantity)
            brand = "brand" + n;
            priceId = "price" + n;
            quantityId = "quantity" + n;
            // Getting details of the selected shirt
            // brand
            name = document.getElementById(brand).innerHTML;
            // price
            price = document.getElementById(priceId).innerHTML;
            // quantity
            quantity = document.getElementById(quantityId).value;
            // Creating a li element to add it to ul 
            var node = document.createElement("LI");
            // id of li element
            item = "item"+i;
            node.setAttribute("id", item)
            // cost of the selected shirt
            itemCost[i-1] = Number(price) * Number(quantity);
            // Updating the index i 
            i += 1;
            // text of the li element
            var textnode = document.createTextNode(name+" "+quantity+" x "+price+" $, size: "+ size);
            // add the text to li element
            node.appendChild(textnode);
            // add li element to ul list
            document.getElementById("items").appendChild(node);

            total += Number(price) * Number(quantity);
            // update the total
            document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $";
            
            // Add a remove button 
            document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+item+"'"+')">x</button>';
            // you have to respect the order of: '' and ""
            
        }

         // delete message when the select element is clicked
         function deleteE(eId) {
            document.getElementById(eId).innerHTML = ' ';
        }

        // Remove a product from the cart
        function deleItem(eId){
            document.getElementById(eId).remove();
            // slice is string method
            // eId (element Id) contain root + number (ex: item4)
            // n is the number in eId 
            n = Number(eId.slice(-1)) - 1;
            // remove the cost of the product deleted from the cart
            total -= itemCost[n];
            // Updating the cost of products in the cart
            document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $"; 
        }
        var like = document.getElementsByClassName("like-btn");
        for (let i = 0; i < like.length; i++) {
          like[i].addEventListener("click", function () {
            if (like[i].style.color === "black") {
              like[i].style.color = "red";
            } else {
              like[i].style.color = "black";
            }
          });
        }