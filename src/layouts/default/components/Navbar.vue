<template>
	<nav>
		<div class="flex items-center">
			<ButtonIcon @click="go('back')"><SvgIcon name="arrow-left" class="w-6 h-6" /></ButtonIcon>
			<ButtonIcon @click="go('forward')"><SvgIcon name="arrow-right" class="w-6 h-6" /></ButtonIcon>
		</div>
		<div class="navigation-links flex flex-1 items-center justify-center uppercase select-none">
			<router-link to="/" :class="{ active: $route.name === 'home' }">首页</router-link>
			<router-link to="/explore" :class="{ active: $route.name === 'explore' }">发现</router-link>
			<router-link to="/library" :class="{ active: $route.name === 'library' }">音乐库</router-link>
		</div>
		<div class="flex justify-end">
			<div class="font-semibold border-none flex items-center bg-gray-100 px-2 rounded-md hover:scale-105 duration-200">
				<SvgIcon name="search" class="h-4 w-4 opacity-30 bg-gray-200 rounded-xl mr-1" />
				<input v-model="keywords" type="search" placeholder="搜索" @keydown.enter="doSearch" class="bg-transparent text-base py-1 border-none outline-none" />
			</div>

			<Dropdown :trigger="['click']">
				<Avatar src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60" class="ml-4 cursor-pointer" />

				<template #overlay>
					<Menu @click="onProfile">
						<MenuItem key="settings">
							<SvgIcon name="settings" />
							<span>设置</span>
						</MenuItem>
						<MenuItem key="login">
							<SvgIcon name="login" />
							<span>登录</span>
						</MenuItem>
						<MenuDivider />
						<MenuItem>
							<SvgIcon name="github" />
							<span>登录登录</span>
						</MenuItem>
					</Menu>
				</template>
			</Dropdown>
			<!--			<img class="avatar" :src="avatarUrl" @click="showUserProfileMenu" />-->
		</div>
	</nav>
</template>

<script lang="ts">
	import { useRouter, useRoute } from 'vue-router'
	import SvgIcon from '@/components/common/SvgIcon.vue'
	import { defineComponent, reactive, toRefs } from 'vue'
	import ButtonIcon from '@/components/common/ButtonIcon.vue'
	import { Dropdown, Avatar, Menu } from 'ant-design-vue'

	interface MenuInfo {
		key: string
		keyPath: string[]
		item: any
		domEvent: MouseEvent
	}

	const MenuItem = Menu.Item
	const MenuDivider = Menu.Divider
	export default defineComponent({
		name: 'Navbar',
		components: { ButtonIcon, MenuDivider, SvgIcon, Dropdown, MenuItem, Avatar, Menu },
		props: {},
		setup() {
			const route = useRoute()
			const router = useRouter()
			const state = reactive({ inputFocus: false, keywords: '' })

			const go = (where: string) => {
				if (where === 'back') router.go(-1)
				else router.go(1)
			}

			const doSearch = () => {
				if (!state.keywords) return
				if (route.name === 'search' && route.params.keywords === state.keywords) {
					return
				}
				router.push({
					name: 'search',
					params: { keywords: state.keywords },
				})
			}

			const onProfile = ({ key }: MenuInfo) => {
				router.push({ name: key })
			}

			return { ...toRefs(state), go, doSearch, onProfile }
		},
	})
</script>

<style lang="less" scoped>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 64px;
		padding: 0 10vw;
		backdrop-filter: saturate(180%) blur(20px);

		.navigation-links {
			a {
				padding: 6px 10px;
				transition: 0.2s;
				@apply font-bold rounded mx-3 text-black text-lg hover:bg-gray-100 active:scale-90;
			}
		}
	}

	@media (max-width: 1336px) {
		nav {
			padding: 0 5vw;
		}
	}
</style>
