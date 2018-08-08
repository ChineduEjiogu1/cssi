#!/usr/bin/env python
#print("Hello CSSI")

#user_input = raw_input("Enter anything: ")
#print("You entered a ", type(user_input))
#print(user_input)


#print("int(raw_input) gives us int")
#num1 = int(raw_input("Enter number #1: "))
#num2 = int(raw_input("Enter number #2: "))
#print(num1 + num2)
#print(type(num1+ num2))


#age = 20

#if age > 18:
    #print("You can buy lottery tickets!")

    #if age > 25:
        #print("You can alos rent a car")

    #print("And you can get your own credit card")

#print("End program")

#my_name = "Bob"
#number = 5;
#friend1 = "Alice"
#friend2 = "John"
#friend3 = "Mallory"

#print("My name is " + my_name + " I have " + str(number) + " friends" /
# + " and my friends " + "\n" + friend1 + " , " + friend2 + "," + friend3 + \
 #".")

def greetAgent(first_name, last_name):
     print "hello" + first_name + " " + last_name;

def greetAgent2(first_name, last_name):
    return "hello" + first_name + " " + last_name;

print("#####")
greetAgent(" GreetingAgent", " uses Print")
print("#####")
result = greetAgent2("GreetingAgent2", " uses return")
r = result.upper()
print(r)
print("#####")
