const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack'
    , { logging: true } );

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    wiki: {
        type: Sequelize.STRING,
    }
},
    {
        // getterMethods: {
        //     wiki() {
        //         return `/wiki/${this.urlTitle}`;
        //     },
        // },
        hooks: {
            beforeValidate(page, options){
                page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g,'');
            },
            afterValidate(page, options) {
                page.wiki = '/wiki/'+ page.urlTitle
            }
        }
    },
);

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
});

module.exports = {
  Page: Page,
  User: User,
  db: db,
};
