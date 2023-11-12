const UsersPage = () => {
    <TableMRT
        data={fakeUsers}
        description='Add, edit, and archive users.'
        isFullscreen={false}
        RightButtons={<AddUserDialogForm />}
        RowActions={
          <>
            {fakeUsersRowActions.map((rowAction) => {
              if (rowAction.label.toLowerCase().includes('edit')) {
                return (
                  <EditUserDialogForm
                    key={rowAction.label}
                    icon={rowAction.icon}
                    label={rowAction.label}
                  />
                );
              }

              return (
                <Button
                  key={rowAction.label}
                  className={cn(
                    `text-zinc-900 justify-between hover:bg-zinc-100`,
                    // If label includes 'trash' or 'delete' make the text red and icon
                    // color red
                    (rowAction.label.toLowerCase().includes('trash') ||
                      rowAction.label.toLowerCase().includes('archive') ||
                      rowAction.label.toLowerCase().includes('delete')) &&
                      'text-destructive hover:text-red-400',
                  )}
                  variant='ghost'
                >
                  {rowAction.label}
                  {rowAction.icon}
                </Button>
              );
            })}
          </>
        }
        searchPlaceholder='Search User'
        template={fakeUsersTemplate}
        title='Users'
      />
};

export default UsersPage;
