function toggle(objectId, toggleClass) {
    var toggleObject = document.getElementById(objectId);
    if (toggleObject.classList.contains(toggleClass)) {
        toggleObject.classList.remove(toggleClass);
    } else {
        toggleObject.classList.add(toggleClass);
    }
}
