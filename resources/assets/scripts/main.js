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
    document.querySelectorAll('pre:not(.codeflask):not(.codeflask__pre)').forEach(function(node) {
        let copy  = document.createElement('a');
        copy.clpb = document.createElement('textarea');

        copy.classList.add('copy');
        copy.clpb.setAttribute('readonly', 'true');
        copy.addEventListener('click', function(event) {
            event.target.clpb.value = event.target.closest('pre').querySelector('code').innerText;

            event.target.clpb.select();
            document.execCommand('copy');
        });

        copy.innerHTML             = ' ';
        copy.clpb.style.background = 'transparent';
        copy.clpb.style.overflow   = 'hidden';
        copy.clpb.style.display    = 'block';
        copy.clpb.style.outline    = 'none';
        copy.clpb.style.resize     = 'none';
        copy.clpb.style.border     = 'none';
        copy.clpb.style.height     = '0px';
        copy.clpb.style.width      = '0px';
        copy.clpb.style.font       = '0px';

        copy.append(copy.clpb);
        node.prepend(copy);
    });
});
