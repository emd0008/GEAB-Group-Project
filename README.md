# Pet Adoption Project

### Information
* The site will have a working outline
    * Login Page
    * Welcome page with...
        * Website Name
        * Link to adoptions
    * Adoption page with...
        * All available animals for adoption
        * Shows pictures and names of animals
        * Possible filter to page to make searching
        easier
        * Single page with more information on the
        selected animal
    * Accessories page with...
        * Pictures of pet accessories with prices and names
    * Vet page with...
        * A form to post a question to a vet
        * To scheledule an appointment
    * Other services page with...
        * Pet sitters
        * Dog walkers
        * Training
        * To scheledule an appointment

### User Stories
* User Stories in Progress
    * As an End User I want An attractive web page so that I can view all types of adoptions.
        * In progress
    * As an End User I want To view a sampling of available products so that I can easily see what types of items are available.
        * In progress
    * As an End User I want To view a list of specific products by category so that I can narrow my search.
        * In progress
    * As an End User I want To see related items when viewing a product so that I can see what accessories I might need.
        * In progress
    * As an End User I want To see a product image so that I know what I’m buying.
        * In progress
    * As an End User I want To see a product description so that I know what I’m buying.
        * In progress
    * As an End User I want To see the price of items so that I know how much they cost.
        * In progress
    * As an End User I want Be able to contact the company so that I can ask questions.
        * In progress
    * As an End User I want To be able to purchase online so that I can buy stuff.
        * In progress
    * As an End User I want My purchase to be secure so that I don’t have my identify stolen.
        * In progress
    * As an End User I want An online adoption form so that I can complete necessary paperwork online.
        * In progress
    * As an End User I want To see a list of local veternarians so that I can have my pet checked.
        * In progress
    * As an End User I want To be able to quickly, easily, and intuitively navigate the site so that I can find what I want.
        * In progress
    * As an End User I want To be able to login securely so that I can access my account.
        * In progress
    * As an End User I want To be able to add products to a list of favorites so that I can view my favorite items later.
        * In progress
    * As an End User I want To be able to add multiple products to my cart so that I can check out one time.
        * In progress
    * As an End User I want To see a map of local veternarians so that I can have my pet checked.
        * In progress
    * As an End User I want To be able to schedule an appointment to view a pet so that I can add it to my calendar.
        * In progress
    * As an End User I want To be able to schedule a dog walk/groom appointment so that I can add it to my calendar.
        * In progress

DATABASE SETUP

* TABLES:
  * category: id, name
  * subcategory: id, name, parent (FK - category.id)
  * product: id, name, description, price, image, subcategory (FK - subcategory.id)

* STORED PROCEDURES:
  * AllProducts()
    * Returns id, ProductName, description, price, image, SubcatID, Subcategory, CatID, Category
  * ProductByID(id: number)
    * Returns id, ProductName, description, price, image, SubcatID, Subcategory, CatID, Category
  * ProductsByCategory(id: number)
    * Returns id, ProductName, description, price, image, SubcatID, Subcategory, CatID, Category
  * ProductsBySubcategory(id: number)
    * Returns id, ProductName, description, price, image, SubcatID, Subcategory, CatID, Category
  * CreateUser(email: string, password, string)
    * Creates a record in the user table