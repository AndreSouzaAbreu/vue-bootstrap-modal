# VUE BOOTSTRAP MODAL

Vue Bootstrap Modal is a reusable component that you can use accross your project whenever you need to display a simple modal popup. So, you don't have repeat the same html code everytime you want to use a bootstrap modal.

## Table of Contents

- [Get started](#get-started)
- [Demo](#demo)
- [Configuration](#configuration)
- [License](#license)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [Author](#author)

## Get started

### Installation

```console
npm install --save @andresouzaabreu/vue-bootstrap-modal
```

### Set up

```javascript
import VueBootstrapModal from '@andresouzaabreu/vue-bootstrap-modal'

// register it globally with whatever name you want
Vue.component('bootstrap-modal', VueBootstrapModal)
```

### Example Use

```html
<button class="btn btn-primary" @click="(showForm = true)">
    Sign in into your account
</button>

<bootstrap-modal id="login-form-modal" title="Sign in" v-model="showForm">
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" id="name" name="name" type="text">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input class="form-control" id="email" name="email" type="email">
        </div>
        <div class="form-group">
            <button class="btn btn-danger" type="button" data-dismiss="modal">
                CANCEL
            </button>
            <button class="btn btn-success" type="submit">
                Sign in
            </button>
        </div>
    </form>
</bootstrap-modal>
```

In this case, if `show` is `true`, it will render the following:

```html
<div id="login-form-modal" tabindex="-1" role="dialog" aria-labelledby="login-form-modal-title" class="modal fade show" aria-modal="true" style="display: block;">
    <div role="document" class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 id="login-form-modal-title" class="modal-title">
                    Sign in
                </h5>
                <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input id="email" name="email" type="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <button type="button" data-dismiss="modal" class="btn btn-danger">
                            CANCEL
                        </button>
                        <button type="submit" class="btn btn-success">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
```

## Demo

See a demo version of the project on [codesandbox](https://codesandbox.io/s/vue-bootstrap-modal-demo00-56iw7?fontsize=14&hidenavigation=1&theme=dark).

## Configuration

| prop | type | description |
|------|------|-------------|
| id | `String` | The modal's css id. jQuery will use the id to show/hide the modal. |
| title | `String` | The title to be displayed in the modal's header. |
| isVisible | `Boolean` | Whether to show or not the modal. |

**Note**: For BootstrapModal to work properly, the prop `isVisible` must be passed using `v-model` or by adding an listener for the `close` event, which triggers when the modal is closed. Here is an example

```html
<bootstrap-modal title="Custom modal" id="custom-modal" v-model="showModal">
    <!-- content -->
</bootstrap-modal>

OR

<bootstrap-modal title="Custom modal" id="custom-modal" :isVisible="showModal" @close="(showModal = false)">
    <!-- content -->
</bootstrap-modal>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/AndreSouzaAbreu/vue-bootstrap-modal/tags).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

- **André Souza Abreu** - *Initial work* - [Github](https://github.com/AndreSouzaAbreu)
