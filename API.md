<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [HullClient][1]
    -   [configuration][2]
    -   [post][3]
    -   [del][4]
    -   [put][5]
    -   [get][6]
    -   [token][7]
    -   [traits][8]
    -   [track][9]
    -   [alias][10]
    -   [account][11]
    -   [as][12]
    -   [asUser][13]
    -   [asAccount][14]
    -   [util.groupTraits][15]
    -   [util.properties.get][16]
    -   [util.settings.update][17]
    -   [util.traits.group][18]

## HullClient

HullClient instance constructor - creates new instance to perform API calls, issue traits/track calls and log information

**Parameters**

-   `config` **[Object][19]** configuration object
    -   `config.id` **[string][20]** Connector ID - required
    -   `config.secret` **[string][20]** Connector Secret - required
    -   `config.organization` **[string][20]** Hull organization - required
    -   `config.firehoseUrl` **[string][20]?** The url track/traits calls should be sent
    -   `config.protocol` **[string][20]** protocol which will be appended to organization url, override for testing only (optional, default `https`)
    -   `config.prefix` **[string][20]** prefix of Hull REST API - only possible value now (optional, default `/api/v1`)

**Examples**

```javascript
const Hull = require("hull-client");
const client = new Hull({
  id: "HULL_ID",
  secret: "HULL_SECRET",
  organization: "HULL_ORGANIZATION_DOMAIN"
});
```

### configuration

Returns the global configuration object.

**Examples**

```javascript
{
  prefix: "/api/v1",
  domain: "hullapp.io",
  protocol: "https",
  id: "58765f7de3aa14001999",
  secret: "12347asc855041674dc961af50fc1",
  organization: "fa4321.hullapp.io",
  version: "0.13.10"
}
```

Returns **[Object][19]** current `HullClient` configuration parameters

### post

Performs a POST HTTP request on selected url of Hull REST API (prefixed with `prefix` param of the constructor)

**Parameters**

-   `url` **[string][20]** 
-   `params` **[Object][19]?** 
-   `options` **[Object][19]**  (optional, default `{}`)
    -   `options.timeout` **[Number][21]?** option controls if the client should retry the request if the client timeout error happens or if there is an error 503 returned serverside - the value of the option is applied for client side error
    -   `options.retry` **[Number][21]?** controls the time between timeout or 503 error occurence and the next retry being done

### del

Performs a DELETE HTTP request on selected url of Hull REST API (prefixed with `prefix` param of the constructor)

**Parameters**

-   `url` **[string][20]** 
-   `params` **[Object][19]?** 
-   `options` **[Object][19]**  (optional, default `{}`)
    -   `options.timeout` **[Number][21]?** option controls if the client should retry the request if the client timeout error happens or if there is an error 503 returned serverside - the value of the option is applied for client side error
    -   `options.retry` **[Number][21]?** controls the time between timeout or 503 error occurence and the next retry being done

### put

Performs a PUT HTTP request on selected url of Hull REST API (prefixed with `prefix` param of the constructor)

**Parameters**

-   `url` **[string][20]** 
-   `params` **[Object][19]?** 
-   `options` **[Object][19]**  (optional, default `{}`)
    -   `options.timeout` **[Number][21]?** option controls if the client should retry the request if the client timeout error happens or if there is an error 503 returned serverside - the value of the option is applied for client side error
    -   `options.retry` **[Number][21]?** controls the time between timeout or 503 error occurence and the next retry being done

### get

Performs a GET HTTP request on selected url of Hull REST API (prefixed with `prefix` param of the constructor)

**Parameters**

-   `url` **[string][20]** 
-   `params` **[Object][19]?** 
-   `options` **[Object][19]**  (optional, default `{}`)
    -   `options.timeout` **[Number][21]?** option controls if the client should retry the request if the client timeout error happens or if there is an error 503 returned serverside - the value of the option is applied for client side error
    -   `options.retry` **[Number][21]?** controls the time between timeout or 503 error occurence and the next retry being done

### token

Used for [Bring your own users][22].
Creates a signed string for the user passed in hash. `userHash` needs an `email` field.
[You can then pass this client-side to Hull.js][23] to authenticate users client-side and cross-domain

**Parameters**

-   `claims` **[Object][19]** additionalClaims

**Examples**

```javascript
hullClient.asUser({ email: "xxx@example.com", external_id: "1234" }).token(optionalClaims);
hullClient.asAccount({ domain: "example.com", external_id: "1234" }).token(optionalClaims);
```

Returns **[string][20]** token

### traits

Saves attributes on the user or account. Only available on User or Account scoped `HullClient` instance (see [HullClient#asUser][24] and [HullClient#asAccount][25]).

**Parameters**

-   `traits` **[Object][19]** And object with new attributes, it's always flat object, without nested subobjects
-   `context` **[Object][19]**  (optional, default `{}`)
    -   `context.source` **[string][20]?** Optional source prefix, if applied all traits will be prefixed with this string (and `/` character)

Returns **[Promise][26]** 

### track

Stores events on user. Only available on User scoped `HullClient` instance (see [HullClient#asUser][24]).

**Parameters**

-   `event` **[string][20]** event name
-   `properties` **[Object][19]** additional information about event, this is a one-level JSON object (optional, default `{}`)
-   `context` **[Object][19]** The `context` object lets you define event meta-data. Everything is optional (optional, default `{}`)
    -   `context.source` **[string][20]?** Defines a namespace, such as `zendesk`, `mailchimp`, `stripe`
    -   `context.type` **[string][20]?** Define a event type, such as `mail`, `ticket`, `payment`
    -   `context.created_at` **[string][20]?** Define an event date. defaults to `now()`
    -   `context.event_id` **[string][20]?** Define a way to de-duplicate events. If you pass events with the same unique `event_id`, they will overwrite the previous one.
    -   `context.ip` **[string][20]?** Define the Event's IP. Set to `null` if you're storing a server call, otherwise, geoIP will locate this event.
    -   `context.referer` **[string][20]?** Define the Referer. `null` for server calls.

Returns **[Promise][26]** 

### alias

**Parameters**

-   `body` **\[type]** [description]

Returns **\[type]** [description]

### account

Available only for User scoped `HullClient` instance (see [HullClient#asUser][24]).
Returns `HullClient` instance scoped to both User and Account, but all traits/track call would be performed on the User, who will be also linked to the Account.

**Parameters**

-   `accountClaim` **[Object][19]** [description] (optional, default `{}`)

Returns **[HullClient][27]** HullClient scoped to a User and linked to an Account

### as

**Parameters**

-   `userClaim`  
-   `additionalClaims`   (optional, default `{}`)

**Meta**

-   **deprecated**: Use `asUser` instead


### asUser

Takes User Claims (link to User Identity docs) and returnes `HullClient` instance scoped to this User.
This makes [HullClient#traits][28] and [HullClient#track][29] methods available.

**Parameters**

-   `userClaim` **[Object][19]** 
-   `additionalClaims` **[Object][19]**  (optional, default `{}`)


-   Throws **[Error][30]** If no valid claims are passed

Returns **[HullClient][27]** 

### asAccount

Takes Account Claims (link to User Identity docs) and returnes `HullClient` instance scoped to this Account.
This makes [HullClient#traits][28] method available.

**Parameters**

-   `accountClaim` **[Object][19]** 
-   `additionalClaims` **[Object][19]**  (optional, default `{}`)


-   Throws **[Error][30]** If no valid claims are passed

Returns **[HullClient][27]** instance scoped to account claims

### util.groupTraits

**Meta**

-   **deprecated**: use `utils.traits.group` instead


### util.properties.get

Gets and returns all existing properties in the organization along with their metadata

Returns **[Promise][26]&lt;[Object][19]>** 

### util.settings.update

Updates `private_settings` merging them with existing ones before.

Note: this method will trigger `hullClient.put` and will result in `ship:update` notify event coming from Hull platform - possible loop condition.

**Parameters**

-   `newSettings` **[Object][19]** settings to update

Returns **[Promise][26]** 

### util.traits.group

The Hull API returns traits in a "flat" format, with '/' delimiters in the key.
This method can be used to group those traits into subobjects:

**Parameters**

-   `user` **[Object][19]** flat object

**Examples**

````javascript
hullClient.utils.traits.group({
  email: "romain@user",
  name: "name",
  "traits_coconut_name": "coconut",
  "traits_coconut_size": "large",
  "traits_cb/twitter_bio": "parisian",
  "traits_cb/twitter_name": "parisian",
  "traits_group/name": "groupname",
  "traits_zendesk/open_tickets": 18
});

// returns
{
  "email": "romain@user",
  "name": "name",
  "traits": {
    "coconut_name": "coconut",
    "coconut_size": "large"
  },
  "cb": {
    "twitter_bio": "parisian",
    "twitter_name": "parisian"
  },
  "group": {
    "name": "groupname"
  },
  "zendesk": {
    "open_tickets": 18
  }
};
```
````

Returns **[Object][19]** nested object

[1]: #hullclient

[2]: #configuration

[3]: #post

[4]: #del

[5]: #put

[6]: #get

[7]: #token

[8]: #traits

[9]: #track

[10]: #alias

[11]: #account

[12]: #as

[13]: #asuser

[14]: #asaccount

[15]: #utilgrouptraits

[16]: #utilpropertiesget

[17]: #utilsettingsupdate

[18]: #utiltraitsgroup

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[22]: http://hull.io/docs/users/byou

[23]: http://www.hull.io/docs/users/byou

[24]: #hullclientasuser

[25]: #hullclientasaccount

[26]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[27]: #hullclient

[28]: #hullclienttraits

[29]: #hullclienttrack

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error