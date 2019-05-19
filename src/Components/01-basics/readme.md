## 1) Create React App
- https://github.com/facebook/create-react-app
```sh
npx create-react-app react-app
cd react-app
npm start
```
-  {} When java script variable need to show
` <p>Dynamic age={Math.floor(Math.random() * 30)}.</p> `

- Props: if dynamic value need to pass componet.
```sh
const functionalComponent = (props) => {
    return (
        <div>
            <p>FunctionalComponent Name={props.name}, Age={props.age}.</p>
            <p>{props.children}</p>
        </div>
    )
}
```
How to call
`<FunctionalComponent name='xyz' age='21' />`

- Props: Childern
```sh
<FunctionalComponent name='abc1' age='20'>Child Props.</FunctionalComponent>

return (
	<div>
		<p>FunctionalComponent Name={props.name}, Age={props.age}.</p>
		<p>{props.children}</p>
	</div>
)
```



