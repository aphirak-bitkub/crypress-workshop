/// <reference types="cypress" />

it('First Test', () => {
    // 1. Tag
    cy.get('div') // <div id="xxx">   <div>   <div class="full-width"

    // 2. Id
    cy.get('#username') // <div id="username">  <span id="username">    <input id="username">

    // 3. Class
    cy.get('.full-width')  //<div class="full-width size-medium"

    // 4. Find by attribute
    cy.get('[placeholder]')

    // 5. find by sttribute value
    cy.get('[placeholder="Email"]')

    // 5. find by mixed value
    cy.get('input#username[placeholder="Email"]')

})

it('First Spec File', () => {
   cy.visit('http://localhost:4200')
   cy.contains('a' , 'Sign up').click();
   cy.get('h1.text-xs-center').should('contain', 'Sign up');
   cy.get('[placeholder="Username"]').type('imaikungki');
   cy.get('[placeholder="Email"]').type('aphirk@hotmail.com');
   cy.get('[placeholder="Password"]').type('12345');
   cy.contains('button' , 'Sign up').click();
   cy.get('.error-messages').should('contain', 'email has already been taken');
   cy.get('.error-messages').should('contain', 'email has already been taken');
   cy.get('ul.error-message li:eq(1)').should('contain', 'email has already been taken')
})

it('First Training',()=>{
    cy.visit('http://localhost:4200')
    cy.contains('a', 'Sign up').click();
    cy.contains('div.row',' Sign up').find('input').then(inputEliment => {
        cy.wrap(inputEliment)
            .eq(0)
            .clear()
            .type('username')
            .then(
                a1 => {
                const UsernameValue = a1.val();
                expect(UsernameValue).equal('username');
            })
        cy.wrap(inputEliment)
            .eq(1)
            .clear()
            .type('testmail@gmail.com')
            .then(a2 => {
                const EmailValue = a2.val();
                expect(EmailValue).equal('testmail@gmail.com');
            })
        cy.wrap(inputEliment)
            .eq(2)
            .clear()
            .type('password1')
            .then(a3 => {
                const PasswordValue = a3.val();
                expect(PasswordValue).equal('password1');
             })
    })

it('Second Spec File', () => {
        cy.visit('http://localhost:4200')
        cy.contains('a', 'Sign up'). click();
        cy.get('h1.text-xs-center').should('contain', 'Sign up');
        cy.contains('div.row', 'Sign up').find('input').then(inputElement => {
            cy.wrap(inputElement).eq(0).clear().type('this_is_username');
            cy.wrap(inputElement).eq(1).clear().type('thisisemail@email.com');
            cy.wrap(inputElement).eq(2).clear().type('this_is_password');
        })
        cy.contains('div.row', 'Sign up').find('button').then(buttonElement =>{
            cy.wrap(buttonElement).should('not.be.disabled').click();
        })
        
    })

})


it('Invoke command', () => {
    cy.visit('http://localhost:4200')
    
    cy.contains('a', 'Sign in'). click();


    cy.get('button').invoke('text').then(textlable => {
        expect(textlable).to.contains('Sign in');
    })

    cy.get('button').invoke('attr','disabled').then(disabledValue => {
        expect(disabledValue).to.equal('disabled');
    })

    cy.get('button').invoke('css', 'background-color').then(backgroundColor => {
       expect(backgroundColor).to.equal('rgb(92, 184, 92)');
    
    cy.get('button').invoke('css', 'border-color').then(backgroundColor => {
        expect(backgroundColor).to.equal('rgb(92, 184, 92)');

    })      
    })

    
})

it('Verify Style Of Button Sign in', () => {
    cy.visit('http://localhost:4200')
    cy.contains('a', 'Sign in'). click();
    
    cy.get('[placeholder="Email"]').invoke('css', 'background-color').then(backgroundColor => {
        expect(backgroundColor).to.equal('rgb(255, 255, 255)');
    })
    cy.get('[placeholder="Email"]').invoke('css', 'color').then(color => {
        expect(color).to.equal('rgb(85, 89, 92)');
    })
        
    cy.get('[placeholder="Password"]').invoke('css', 'background-color').then(backgroundColor => {
            expect(backgroundColor).to.equal('rgb(255, 255, 255)');
    })        
    
    cy.get('[placeholder="Password"]').invoke('css', 'color').then(backgroundColor => {
                expect(backgroundColor).to.equal('rgb(85, 89, 92)');
    })            

    cy.get('button').invoke('css', 'background-color').then(backgroundColor => {
        expect(backgroundColor).to.equal('rgb(92, 184, 92)');
    })
     
     cy.get('button').invoke('css', 'border-color').then(backgroundColor => {
         expect(backgroundColor).to.equal('rgb(92, 184, 92)');
     })
     
})

// beforeEach ('Sing in',() =>  {
//     cy.intercept('GET', '**/api/tags', {fixture:'tags.json'});
//     cy.visit('http://localhost:4200');
//     cy.contains('a' , 'Sign in').click();
//     // cy.intercept('POST','**/api/users/login').as('login');
//     // cy.contains('button','Sign in').click({force:true});
//     // cy.wait('@login');
//     cy.get('h1.text-xs-center').should('contain', 'Sign in');
//     cy.get('[placeholder="Email"]').type('aphirk@hotmail.com');
//     cy.get('[placeholder="Password"]').type('12345');
//     cy.contains('button' , 'Sign in').click();
   
// })
// // beforeEach ('Navigate to article title menu',() =>  {
// //     cy.contains('a', 'New Article').click();
// //  })

it('Create article title and verify tags', () => {
    cy.get('[placeholder="Article Title"]').type('12345');
    cy.get('[formcontrolname="description"]').type('12345');
    cy.get('[formcontrolname="body"]').type('121232322');
    cy.get('.form-group').find('[placeholder="Enter tags"]').then(labelElement => {
        cy.wrap(labelElement).eq(0).type('aaa{enter}');
        cy.wrap(labelElement).eq(0).type('bbb{enter}');
        cy.wrap(labelElement).eq(0).type('ccc{enter}');
    })
    cy.get('div.tag-list').find('.tag-default').then(fieldTagsElement => {
        cy.wrap(fieldTagsElement).eq(0).should('contain', 'aaa');
        cy.wrap(fieldTagsElement).eq(1).should('contain', 'bbb');
        cy.wrap(fieldTagsElement).eq(2).should('contain', 'ccc');
    })
    cy.get('div.tag-list').find('.ion-close-round').then(labelElement => {
        cy.wrap(labelElement).eq(0).click();
    })
    cy.get('div.tag-list').find('.tag-default').then(labelElement => {
        cy.wrap(labelElement).eq(0).should('contain', 'bbb');
        cy.wrap(labelElement).eq(1).should('contain', 'ccc');
    })
})

it('intercept', () => {
    cy.intercept('GET', '**/api/articles**', {fixture:'articles.json'});
    cy.contains('a' , 'Global Feed').click();

    })

beforeEach('Sing in',() =>  {
    cy.visit('http://localhost:4200');
    cy.contains('a' , 'Sign in').click();
    cy.get('h1.text-xs-center').should('contain', 'Sign in');
    cy.get('[placeholder="Email"]').type('aphirk@hotmail.com');
    cy.get('[placeholder="Password"]').type('12345');
    cy.intercept('POST', '**/api/users/login').as('login');
    cy.contains('button' , 'Sign in').click();
    cy.wait('@login')
})

it.only('intercept', () => {
    cy.intercept('GET', '**/api/articles**', {fixture:'articles.json'});
    cy.contains('a' , 'Global Feed').click();
    cy.intercept('POST', '**/favorite').as('favorite')
    cy.get('app-article-preview').eq(0).find('button').then(btnIconHeart => {
       cy.wrap(btnIconHeart).click();
       cy.wait('@favorite')
       cy.wrap(btnIconHeart).should('contain', '1')
       cy.wrap(btnIconHeart).invoke('css', 'border-color').then(btnBackgroundColor => {
          expect(btnBackgroundColor).to.equal('rgb(92, 184, 92)');
       })
    })
})


// it('new stub',() =>{
//     cy.get('a.nav-link[routerlink="/login"]').click()
//     cy.get('input[formcontrolname="email"]').clear().type('test123@test.com')
//     cy.get('input[formcontrolname="password"]').clear().type('test123').type('{enter}')
//     cy.wait('@login')
//     cy.intercept('GET', '**/api/articles**',{fixture:'articles.json'})
//     cy.contains('a','Global Feed').click()
//     cy.get('div.tag-list').find('a.tag-default').then(tagsList =>{
//         expect(tagsList).length(2)
//     })
//     cy.intercept('POST', '**/favorite').as('favorite')
//     cy.wait('@favorite')
//     cy.get('app-article-list').find('app-article-preview').eq(0).find('app-favorite-button.pull-xs-right').click()
//     cy.wait('@like')
//     cy.get('app-article-list').find('app-article-preview').eq(0).find('app-favorite-button.pull-xs-right').find('button').then(likeButton =>{
//         expect(likeButton.text().trim()).to.equal('1')
//         expect(likeButton.css('background-color')).to.equals('rgb(92, 184, 92)')
//     })
// })