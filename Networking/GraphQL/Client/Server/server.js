import express, { query } from "express";
import  { ApolloError, ApolloServer,gql } from "apollo-server";

const users=[
    {
        id:0,
        name:"Ateef",
        services:[1,2]
    },
    {
        id:1,
        name:"Ateef",
        services:[0,2]
    },
    {
        id:2,
        name:"Ateef",
        services:[1,0]
    },
    {
        id:3,
        name:"Ateef",
        services:[2]
    },
]


const services=[
    {
        id:0,
        title:"Washing",
        provider:[1,2]
    },
    {
        id:1,
        title:"cleaning",
        provider:[0,2]
    },
    {
        id:2,
        title:"rining",
        provider:[0,1,2]
    },
]
  // above is the formal syntax for the below query 
const typeDefs= gql(`
    type User{
        id:ID,
        name:String,
        services:[Service]
    }

    type Service{
    id:ID,
    title:String,
    provider:[User]
    }

  

    type Query{
        users:[User],
        services:[Service]
    }


    `)

    const resolvers = {
        Query:{
            users:()=>{
                return users
            },
            services:()=>{
                return services
            }
        },
        User:{
            services:(user)=>{
                return services.filter((service)=>{service.provider.includes(user.id)})
            }
        },
        Service:{
            provider:(service)=>{
                return users.filter((user)=>{user.services.includes(service.id)})
            }
        }

    }

    const server=new ApolloServer({typeDefs,resolvers})
   server.listen(3000).then(({url})=>{
      console.log(`graph ql server has started at ${url}`)
   })