import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nati from '@/components/Nati'
 master
 master
import kanyaruk from '@/components/kanyaruk'


import jack from '@/components/jack'
import benjarong from '@/components/benjarong'
 master
import Sillawat from '@/components/Sillawat'
import Rittiphon from '@/components/Rittiphon'
import Sirinun from '@/components/Sirinun'
import Sahapat from '@/components/Sahapat'
import Rachata from '@/components/Rachata2'
import kawin from '@/components/kawin'
 master
master

 master
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nati',
      name: 'Nati',
      component: Nati
    },
    {
 master
      path: '/kanyaruk',
      name: 'kanyaruk',
      component: kanyaruk

      path: '/jack',
      name: 'jack',
      component: jack
 master
    },
    {
      path: '/Sillawat',
      name: 'Sillawat',
      component: Sillawat
    },
    {
      path: '/rittiphon',
      name: 'Rittiphon',
      component: Rittiphon
    },
    {
      path: '/Rachata',
      name: 'Rachata',
      component: Rachata
    },
    {
      path: '/Sahapat',
      name: 'Sahapat',
      component: Sahapat
    },
    {
      path: '/kawin',
      name: 'kawin',
      component: kawin
    },
    {
      path: '/Sirinun',
      name: 'Sirinun',
      component: Sirinun
    },
    {
      path: '/benjarong',
      name: 'benjarong',
      component: benjarong
    }
  ]
})
