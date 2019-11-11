window.toggleNav = function(event) {
    event.target.classList.toggle('active');
    event.stopPropagation();
    event.preventDefault();
};

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('nav a').forEach(function(node) {
        node.parentNode.querySelectorAll('a').forEach(function (subnode) {
            if (subnode.getAttribute('href') && subnode.pathname === window.location.pathname) {
                node.classList.add('active');
            }
        });

        if (node.getAttribute('href') && node.pathname === window.location.pathname) {
            node.classList.add('active');
        }
    });
});
