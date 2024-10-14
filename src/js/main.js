const general = document.querySelector('.column'), individual = document.querySelector('.individual'), checkBtn = document.getElementById('individual-border-radius')
/* Verifica si los valores de la propiedad serán generales o personalizados */
const generalOrIndividual = () => {
    checkBtn.checked ? ( general.style.display = 'none', individual.style.display = 'flex') : (general.style.display = '', individual.style.display = 'none')
}

/* Se resetean los valores cada que el elemento 'switch' cambia */
checkBtn.addEventListener('change', () => {
    // resetElements()
    generalOrIndividual()
    generateBorderRadius()
    cardTitle.innerHTML = checkBtn.checked ? "Personaliza los valores de la propiedad 'border-radius' de manera individual:" : "Personaliza el valor de la propiedad 'border-radius' de manera general:" 
})

window.onload = () => {
    checkBtn.checked = false
    resetElements()
    generalOrIndividual()
    generateBorderRadius()
    cardTitle.innerHTML = "Personaliza el valor de la propiedad 'border-radius' de manera general:"
}

const borderLength = document.getElementById('brLength'), topLeft = document.getElementById('brTopLeft'), topLeftValue = document.getElementById('brTLRange'), topRight = document.getElementById('brTopRight'), 
    bottomRight = document.getElementById('brBottomRight'), bottomLeft = document.getElementById('brBottomLeft'), bottomLeftValue = document.getElementById('brBLRange'), borderRadPreview = document.querySelector('.preview'), 
    cssCode = document.getElementById('CSS-code')
let cardTitle = document.querySelector('.title')

/* Se llama a la función cada que el valor de alguno de los elementos 'input' cambia */
const borderPropertiesInput = document.querySelectorAll('.border-radius-properties input')
borderPropertiesInput.forEach(element => {
    element.addEventListener('input', () => { generateBorderRadius() })
});

/* Función que genera el estilo y el código CSS del border-radius de acuerdo al estado del elemento 'switch' */
const generateBorderRadius = () => {
    var code = checkBtn.checked ? `${topLeft.value}% ${topRight.value}% ${bottomLeft.value}% ${bottomRight.value}%` : `${borderLength.value}%`
    borderRadPreview.style.borderRadius = code
    cssCode.value = `border-radius: ${code};\nborder: 2px solid #000000;\t/* opcional */`
}

const copyBtn = document.querySelector('.copy-btn')
copyBtn.addEventListener('click', () => {
    cssCode.select()
    cssCode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cssCode.value)
})

const resetElements = () => {
    borderPropertiesInput.forEach(element => { element.value = 5 });
    topLeft.value = topLeftValue.value = bottomLeft.value = bottomLeftValue.value = 25    
    borderRadPreview.style.borderRadius = '5%', checkBtn.checked = false, generateBorderRadius(), generalOrIndividual()
}