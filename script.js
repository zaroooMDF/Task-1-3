function initForm() {

    function draw() {
        
        let height = Number(inputHeight.value),
            width = Number(inputWidth.value);

        rectangle.style.display = "block";
        rectangle.style.width = width + "px";
        rectangle.style.height = height + "px";


    }
    
    function calculate() {

        let height = Number(inputHeight.value),
            width = Number(inputWidth.value),
            result;

        if (inputArea.checked) {

            result = height * width;

        } else if (inputPerimiter.checked) {

            result = 2*(height + width);

        } else if(inputDiagonal.checked) {

            result = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            result = Math.round(result * 100) / 100;

        }

        fieldsetResult.innerHTML = "Result is: " + result;

     
    };
    
    function validateForm() {     
        
        if (!inputHeight.value) {
            
            fieldsetResult.innerHTML = "Height is required!";
            return false;
            
        }
        
        if (Number(inputHeight.value) <= 0) {
            
            fieldsetResult.innerHTML = "Height must be greater than 0!";
            return false;
        };
        
        if (Number(inputHeight.value) > 150) {
            
            fieldsetResult.innerHTML = "Height must be lower than 150!";
            return false;
            
        };
        
        if (!inputWidth.value) {
            
            fieldsetResult.innerHTML = "Width is required!";
            return false;
            
        }
        
        if (Number(inputWidth.value) <= 0) {
            
            fieldsetResult.innerHTML = "Width must be greater than 0!";
            return false;
        };
        
        if (Number(inputWidth.value) > 150) {
            
            fieldsetResult.innerHTML = "Width must be lower than 150!";
            return false;
            
        };
        
        return true;
        
    }
    
    function processForm() {
        
        if (validateForm()) {
        
            calculate();
            draw();
      
        } 
        else {
            
            rectangle.style.display = "none";
  
        }
        
    };


    function createRadioInput(parentElement, value, text, checked) {

        let label = document.createElement("label");
        let element = document.createElement("input");
        let textNode = document.createTextNode(" " + text);
        element.type = "radio";
        element.name = "calculation";
        element.value = value;
        element.checked = checked;
        parentElement.appendChild(label);
        label.appendChild(element);
        label.appendChild(textNode);
        return element;

    }; 
    function createNumberInput(parentElement, id) {

        let element = document.createElement("input");
        element.type = "number";
        element.id = id;
        element.value = 1;
        element.min = 1;
        parentElement.appendChild(element);
        return element;

    };

    function createLabel(parentElement, forTarget, text) {

        let element = document.createElement("label");
        element.htmlFor = forTarget;
        element.innerHTML = text;
        parentElement.appendChild(element);
        return element;
    };

    function createFieldset(parentElement){

        let element = document.createElement("fieldset");
        parentElement.appendChild(element);
        return element;

    };

    const form = document.createElement("form");
    document.body.appendChild(form);

    let fieldsetOne = createFieldset(form);
    let labelHeight = createLabel(fieldsetOne, "input_height", "Height: ");
    const inputHeight = createNumberInput(fieldsetOne, "input_height");

    let fieldsetTwo = createFieldset(form);
    let labelWidth = createLabel(fieldsetTwo, "input_width", "Width: ");
    const inputWidth = createNumberInput(fieldsetTwo, "input_width");

    let fieldsetThree = createFieldset(form);
    const inputArea = createRadioInput(fieldsetThree, "area", " Area", true);
    const inputPerimiter = createRadioInput(fieldsetThree, "perimiter", " Perimiter", false);
    const inputDiagonal = createRadioInput(fieldsetThree, "diagonal", " Diagonal", false);

    const fieldsetResult = createFieldset(form);

    let fieldsetDraw = createFieldset(form);
    const rectangle = document.createElement("div");
    fieldsetDraw.appendChild(rectangle);
    rectangle.style.backgroundColor = "blue";


    form.addEventListener("submit", function (e) {

        e.preventDefault();
        processForm();

    });

    inputWidth.addEventListener("keyup", processForm);
    inputHeight.addEventListener("keyup", processForm);
    inputArea.addEventListener("click", processForm);
    inputPerimiter.addEventListener("click", processForm);
    inputDiagonal.addEventListener("click", processForm);

    inputWidth.addEventListener("input", processForm);
    inputHeight.addEventListener("input", processForm);

    processForm();
};

initForm();