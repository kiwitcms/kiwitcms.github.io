function toggle(objectId, toggleClass) {
    var toggleObject = document.getElementById(objectId);
    if (toggleObject.classList.contains(toggleClass)) {
        toggleObject.classList.remove(toggleClass);
    } else {
        toggleObject.classList.add(toggleClass);
    }
}

// Toggle the "Get Started" dropdown from a real <button> (keyboard & touch),
// keeping aria-expanded in sync with the open state.
function toggleMenu(objectId, button) {
    toggle(objectId, 'drop-down');
    var open = document.getElementById(objectId).classList.contains('drop-down');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
}
