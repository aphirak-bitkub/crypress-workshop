/// <reference types="cypress" />

describe('Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/api/tags', {fixture:'tags.json'});
        cy.visit('http://localhost:4200')
})

    // it('First Test', () => {
    //     //1. Tag
    //     cy.get('div') //get all in this div ex. <div id="xx"> <div> <div class="full-width"> 
    
    //     //2. ID
    //     cy.get('#username') //get by ID ex. <div id="username"> <span id="username"> <input id="username">
    
    //     //3. class
    //     cy.get('.full-width') //get by class ex. <div class="full-width"> <input class="full-width">
    
    //     //4. Find by attribute
    //     cy.get('[placeholder]') //get by placeholder ex.  <input placeholder /> <input placeholder="Email" />
    
    //     //5. Find by attribute value
    //     cy.get('[placeholder="Email"]') //get by placeholder value ex.  <input placeholder /> <input placeholder="Email" />
    
    //     //6. Find by mixed value
    //     cy.get('input#username[placeholder="Email"]') //get by mix value ex. <input id="username" placeholder="Email" />
    
    //     //7. Find custom attribute
    //     cy.get('data-testid="username"') //get by custom attribute ex. <input data-testid="username">
    
    // })
    
    it('First Spec file', () => {
        cy.visit('http://localhost:4200/');
        cy.contains('a', 'Sign up').click();
        // cy.get('h1.text-xs-center').should('contain', 'Sign up');
        // cy.get('[placeholder="Username"]').type('origin');
        // cy.get('[placeholder="Email"]').type('testaccount@gmail.com');
        // cy.get('[placeholder="Password"]').type('P@ssw0rd');
        // cy.contains('button', 'Sign up').click();

        // cy.contains('div.row', 'Sign up').find('input').eq(0).type('testaccount');
        // cy.contains('div.row', 'Sign up').find('input').eq(1).type('test@gmail.com');
        // cy.contains('div.row', 'Sign up').find('input').eq(2).type('test');
    
        //Selenium style
        // const inputElement = cy.contains('div.row', 'Sign up').find('input');
        // inputElement.eq(0).clear.type('test');
        // inputElement.eq(1).clear.type('11233');
    
        //Cypress style
        cy.contains('div.row', 'Sign up').find('input').then(inputElement => {
            cy.wrap(inputElement)
                .eq(0)
                .type('testaccount')
                .then(a => {
                    const usernameValue = a.val();
                    expect(usernameValue).to.equal('testaccount');
                }) 
        })
        cy.contains('div.row', 'Sign up').find('input').then(inputElement => {
            cy.wrap(inputElement)
                .eq(1)
                .type('testaccount@gmail.com')
                .then(b => {
                    const emailValue = b.val();
                    expect(emailValue).to.equal('testaccount@gmail.com');
                }) 
        })
        cy.contains('div.row', 'Sign up').find('input').then(inputElement => {
            cy.wrap(inputElement)
                .eq(2)
                .type('P@ssw0rd')
                .then(c => {
                    const passwordValue = c.val();
                    expect(passwordValue).to.equal('P@ssw0rd');
                }) 
        })
    
    })

    // //using cypress to assert
    // cy.contains('button', 'Sign in').should('contain', 'Sign in');
    
    // //using callback and jquery to get text then assert
    // cy.get('button').then(buttonElement => {
    //     const buttonText = buttonElement.text();
    //     expect(buttonText).to.contain('Sign in') 
    // })
    
    // //using invoke func to get text then assert
    // cy.get('button').invoke('text').then(buttonText => {
    //     expect(buttonText).to.contain('Sign in') 
    // })

    // //using invoke func to get attr then assert
    // cy.get('button').invoke('attr', 'disabled').then(attrText => {
    //     expect(attrText).to.eq('disabled')
    // })


    it('Sign in', () => {
        cy.visit('http://localhost:4200')
        cy.contains('a', 'Sign in'). click();
        cy.contains('button', 'Sign in').should('be.disabled');
    
        cy.get('input[type=text]').invoke('css', 'color').then(color => {
            expect(color).to.contain('rgb(85, 89, 92)')
        })
        cy.get('input[type=password]').invoke('css', 'color').then(color => {
            expect(color).to.contain('rgb(85, 89, 92)')
        })
        cy.get('button').invoke('css', 'background-color').then(color => {
            expect(color).to.contain('rgb(92, 184, 92)')
        })
    
    })

    it('New test case', () => {
        cy.contains('a', 'Sign in').click();
        cy.get('[placeholder="Email"]')
            .clear()
            .type('testaccount@gmail.com');

        cy.get('[placeholder="Password"]')
            .clear()
            .type('1qazZAQ!');

        cy.contains('button', 'Sign in').click({force:true});

        cy.contains('a', 'New Article').click();
        cy.get('[placeholder="Article Title"]')
            .clear()
            .type('Test Title');

        cy.get(`[placeholder="What's this article about?"]`)
            .clear()
            .type('About Article');
        
        cy.get(`[placeholder="Write your article (in markdown)"]`)
            .clear()
            .type('Your Article');

        cy.get('[placeholder="Enter tags"]')
            .clear()
            .type('Tag A{enter}');

        cy.get('[placeholder="Enter tags"]')
            .clear()
            .type('Tag B{enter}');
       
        cy.get('.tag-default').eq(0).should('contain', 'Tag A');
        cy.get('.tag-default').eq(1).should('contain', 'Tag B');
        cy.get('.tag-default').eq(1).find('.ion-close-round').click();
        cy.get('.tag-default').eq(0).should('contain', 'Tag A');
    })

    it('Intercept', () => {
        cy.log('xxx');
    })

    it('Stub Articles', () => {
        cy.contains('a', 'Sign in').click();
        cy.get('[placeholder="Email"]').type('testaccount@gmail.com');
        cy.get('[placeholder="Password"]').type('1qazZAQ!');
        cy.intercept('POST', '**/api/users/login').as('login');
        cy.contains('button', 'Sign in').click({force:true});
        cy.wait('@login');

        cy.intercept('GET', '**/api/articles**', {fixture:'articles.json'});
        cy.contains('a', 'Global Feed').click();

    })


})
