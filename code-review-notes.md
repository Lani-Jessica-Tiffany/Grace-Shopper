# Code Review Notes

## Code Review 1

- Make sure to work with integers when dealing with price. You can do price in pennies and account for the decimal on the frontend
- An efficient is to have 4 tables: Products, Orders, OrderProduct(explicitly defined through table), Users, where the relationships are as follows:
    - User has many orders; orders belongs to user
    - Products can be a part of many orders; orders can contain many products
- Don't put `req.body` directly into `.create` .`update`; destructure it first
- When assigning tickets, convert them into issues (or start them as issues) and even think about putting "tags" on it so it will be even easier to see what was worked on such as "bug" or "feature" or whatever
- Consider local storage for your guest cart
    - Express sessions work, too
- Do more testing
- Please, listen to Emma and work on vertical slices

### Think About This For Our Next Code Review

I will be asking you these questions individually in your next code review:

- After our first code review, what do you think has been the hardest part?
- After our first code review, what do you expect to be the hardest part?

Then, in our second code review, after you've answered above, I will ask what changed?

- As you went along with the project, what became the hardest part? Did it change from what you originally thought?
