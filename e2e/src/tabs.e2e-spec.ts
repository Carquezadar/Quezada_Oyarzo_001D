import { browser,element, by } from "protractor";

describe('Mi prueba', ()=>{
    // Codigo de config
    beforeEach(()=>{
        browser.get("/");
    })

    // Prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
        });
    // Prueba 2
    it("El proyecto lleva por nombre Alls Stars", ()=>{
        expect(element(by.css(".titulo ion-card-title")).getText()).toContain("☆ALLS STARS☆");
        });



});