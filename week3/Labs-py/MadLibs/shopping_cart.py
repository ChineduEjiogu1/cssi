shoppingList = []

choice = ""

while(choice != 'e'):
    choice = raw_input("Enter choice: a, b, c, d, e: ").lower()
    print choice


    if (choice == 'a'):
        print ('print a')
        item = raw_input("Enter item: ")
        shoppingList.append(item)
        print(shoppingList)

    elif (choice == 'b'):
        item = raw_input('Enter item to remove: ')
        shoppingList.remove(item)

    elif (choice == 'c'):
        print ('print items: ')
        for i in shoppingList:
            print(i)

    elif (choice == 'd'):
        print ('print d')
