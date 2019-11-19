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

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach(function(node) {
        let copy  = document.createElement('a');
        copy.clpb = document.createElement('textarea');

        copy.classList.add('copy');
        copy.addEventListener('click', function(event) {
            event.target.clpb.value = event.target.closest('pre').querySelector('code').innerText;

            console.log(event.target.clpb.select());
            document.execCommand('copy');
        });

        copy.innerHTML          = '⎘';
        copy.clpb.style.display = 'block';
        copy.clpb.style.border  = 'none';
        copy.clpb.style.height  = '0';
        copy.clpb.style.width   = '0';

        copy.append(copy.clpb);
        node.prepend(copy);
    });
});
