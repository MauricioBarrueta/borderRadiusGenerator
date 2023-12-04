const defaultBorder = document.querySelector('.column'), individualForm = document.querySelector('.individual'),
    isIndividualActive = document.getElementById('individual-border-radius')
/* Verifica si los valores de la propiedad serán generales o personalizados */
const generalOrIndividual = () => {
    isIndividualActive.checked ? ( defaultBorder.style.display = 'none', individualForm.style.display = 'revert') 
        : (defaultBorder.style.display = '', individualForm.style.display = 'none')
}

/* Se resetean los valores cada que el elemento 'switch' cambia */
isIndividualActive.addEventListener('change', () => {
    resetElements()
    generalOrIndividual()
    generateBorderRadius()
    cardTitle.innerHTML = isIndividualActive.checked ? "Personaliza los valores de la propiedad 'border-radius' de manera individual:"
        : "Personaliza el valor de la propiedad 'border-radius' de manera general:" 
})

window.onload = () => {
    isIndividualActive.checked = false
    resetElements()
    generalOrIndividual()
    generateBorderRadius()
    cardTitle.innerHTML = "Personaliza el valor de la propiedad 'border-radius' de manera general:"
}

const borderRadLength = document.getElementById('brLength')
const brTopLeft = document.getElementById('brTopLeft'), topLeftValue = document.getElementById('brTLRange'),
    brTopRight = document.getElementById('brTopRight'), brBottomRight = document.getElementById('brBottomRight'), 
    brBottomLeft = document.getElementById('brBottomLeft'), bottomLeftValue = document.getElementById('brBLRange')
const borderRadPreview = document.querySelector('.preview'), cssCode = document.getElementById('CSS-code')
let cardTitle = document.querySelector('.title')

/* Se llama a la función cada que el valor de alguno de los elementos 'input' cambia */
const borderPropertiesInput = document.querySelectorAll('.border-radius-properties input')
borderPropertiesInput.forEach(element => {
    element.addEventListener('input', () => {
        generateBorderRadius()
    })
});

/* Función que genera el estilo y el código CSS del border-radius de acuerdo al estado del elemento 'switch' */
const generateBorderRadius = () => {
    var code = isIndividualActive.checked ? `${brTopLeft.value}% ${brTopRight.value}% ${brBottomLeft.value}% ${brBottomRight.value}%` 
        : `${borderRadLength.value}%`
    borderRadPreview.style.borderRadius = code
    cssCode.value = `border-radius: ${code};`
}

const copyBtn = document.querySelector('.copy-btn')
copyBtn.addEventListener('click', () => {
    cssCode.select()
    cssCode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cssCode.value)
})

const resetElements = () => {
    borderPropertiesInput.forEach(element => { element.value = 5 });
    brTopLeft.value = topLeftValue.value = brBottomLeft.value = bottomLeftValue.value = 25    
    cssCode.value = ''
}