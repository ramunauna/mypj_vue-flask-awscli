<template>
    <div class="header_div">
        <div class="header_div-logo">
            <h1>My SPA</h1>
        </div>
        <div class="header_div-link">
            <ul>
                <li v-for="link in links" :key="link.name">
                    <router-link v-bind:to=link.to>{{ link.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                links: [
                    {
                        name: "Home",
                        to: "/"
                    },
                    {
                        name: "About",
                        to: "/about"
                    },
                    {
                        name: "Content",
                        to: "/content"
                    }
                ]
            }
        }
    }
</script>
