// TABLE SHOW/HIDE
const btn = document.getElementById("toggleBtn");
const table = document.getElementById("productTable");

if (btn && table) {
    btn.addEventListener("click", () => {
        if (table.classList.contains("show")) {
            table.classList.remove("show");
            btn.textContent = "Mutasd a terméktáblázatot";
        } else {
            table.classList.add("show");
            btn.textContent = "Rejtsd el a terméktáblázatot";
        }
    });
}

// MODAL PRODUCT NAME
const buyModal = document.getElementById('buyModal');
if (buyModal) {
    buyModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const product = button.getAttribute('data-product');
        document.getElementById('productName').innerText = "Termék: " + product;
    });
}
